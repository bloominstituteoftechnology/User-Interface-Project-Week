
### Home Page Desktop Design ###

4 main sections: Header, Top, Main Body, Footer

#Header

100% width
Header div with left logo image and right menu bars image
Menu will expand so create CSS class .menu-open to access with the DOM

header
    img
    menu bars
    menu (to expand)
/header

#Top

100% width
Image background with h2 overlayed in large white font (bottom right justified)
Image with z-index 0; H2 with z-index 1;

div
    img
    h1
/div


##Main Body

Desktop: 80% width

#Top 2 Sections

Two divs with similar layouts, but mirrored (switch sides image/text is on)

div (flex column) - container to hold top two sections
    div (flex row) -- box with img and text
        div (flex column) - box with text
            h2
            p
            button
        /div
        img
    /div
    div(flex row) - box with img and text
        div (flex column) - box with text
            h2
            p
            button
        /div
        img
    /div
/div


#Recent Projects Div

h2 div for "Recent Projects" followed by 3 matching (but mirrored) divs

div
    h2 - "Recent Projects" left justified
    div - section box
        img
        div - grey background, 1px white border
            h3 (z-index 1 to overlay on picture & text)
        /div
        p (50% width?)
    /div
    div - section box
        img
        div - grey background, 1px white border
            h3 (z-index 1 to overlay on picture & text)
        /div
        p (50% width?)
    /div
    div - section box
        img
        div - grey background, 1px white border
            h3 (z-index 1 to overlay on picture & text)
        /div
        p (50% width?)
    /div
/div


#Footer

div - (flex column)
    div (flex row)
        div - (flex column)
            h4
            email input box (** why is there no submit button?)
            p
        /div
        div -  NY Office (flex column)
            h5
            p
        /div
        div - FL Office (flex column)
            h5
            p
        /div
        div - CA Office (flex column)
            h5
            p
        /div
    /div
    p (copyright text, very small)
/div




### Menu Expansion Desktop ###

background 70-80% opacity, same as header. Covers 100% of the page (how do we determine the height it goes to?)

a tags are centered and flex column. white text, turns brown on hover

div
    a - home
    a - services
    a - contact
/div

Set CSS class to .menu-open to make visible

S&J logo in top left corner remains full opacity.



### Mobile Home Page Design Changes ###

#Header
S&J logo and menu bars become larger

#Top
H1 becomes larger

#Main Body

Top two sections adjust to flex column, 100% width of the page

div
    div
        img (90% width)
        h2
        p (is larger)
        button (90% width)
    /div
    div
        img (90% width)
        h2
        p (is larger)
        button (90% width)
    /div
/div


Recent Projects sections adjust to flex column, 100% width of the page

div
    h2 - "Recent Projects" (still left justified)
    div
        img (100% width)
        div
            h3 (90% width, no white border, still z-index)
        /div
        p
        p
    /div
    div
        img (100% width)
        div
            h3 (90% width, no white border, still z-index)
        /div
        p
        p
    /div
    div
        img (100% width)
        div
            h3 (90% width, no white border, still z-index)
        /div
        p
        p
    /div
/div

#Footer

100% page width, now flex column. Left justify the h5 divs and the copyright p

div
    div
        h4
        email input box -- **Still no submit button?
        p
    /div
    div - NY
        h5
        p
    /div
    div - FL
        h5
        p
    /div
    div - CA
        h5
        p
    /div
    p - (Copyright)
/div
