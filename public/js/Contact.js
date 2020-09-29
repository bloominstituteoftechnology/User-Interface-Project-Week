const form = document.querySelector('.contact-form');

// getting data
// db.collection('contacts').orderBy('email').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => console.log(doc.data()));
// })

// real-time listener
db.collection('contacts').orderBy('email').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      console.log(change.doc.data())
    }
  })
})

//saving data
form.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('contacts').add({
    email: form.email.value,
    buildings: form.buildings.value,
    'project-overview': form['project-overview'].value,
    'business-type': form['business-type'].value,
  })
  form.email.value = '';
  form.buildings.value = 1;
  form['project-overview'].value = '';
  form['business-type'].value = 'small-business';
})
