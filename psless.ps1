param (
  # Default value for DSN check is to look for the development setup
  [string]$lessFile = "index.less",
  [int]$timeout = 120
)
$currentPath = Get-Location

$code = {
  Set-Location $Using:currentPath
  $myCommand = "less-watch-compiler less css index.less"
  Invoke-Expression -Command $myCommand
}
$continue = $true
while($continue)
{
    if ([console]::KeyAvailable)
    {
        Write-Host "Exit with `"q`"";
        $x = [System.Console]::ReadKey() 

        switch ( $x.key)
        {
            q { $continue = $false }
        }
    } 
    else
    {
      $j = Start-Job -ScriptBlock $code
      if (Wait-Job $j -Timeout $timeout) { Receive-Job $j }
      Remove-Job -force $j
      Write-Host "Restarting less process "
    }    
}



