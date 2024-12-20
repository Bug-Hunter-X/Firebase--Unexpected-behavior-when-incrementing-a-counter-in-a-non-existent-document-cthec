function incrementCounter(docRef) {
  docRef.get().then((doc) => {
    if (doc.exists) {
      const newCount = doc.data().counter + 1;
      return docRef.update({ counter: newCount });
    } else {
      // Handle the case where the document doesn't exist
      console.error("Document does not exist!");
      return Promise.reject("Document not found");
    }
  }).catch((error) => {
    console.error("Error incrementing counter: ", error);
    return Promise.reject(error); // Properly propagate error
  });
}