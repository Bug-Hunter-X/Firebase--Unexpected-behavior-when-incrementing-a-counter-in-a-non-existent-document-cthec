async function incrementCounter(docRef) {
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const newCount = doc.data().counter + 1;
      await docRef.update({ counter: newCount });
      return newCount; // Return the updated counter
    } else {
      // Create the document if it doesn't exist
      await docRef.set({ counter: 1 });
      return 1; // Return the initial counter value
    }
  } catch (error) {
    console.error('Error incrementing counter:', error);
    throw error; // Re-throw the error for higher-level handling
  }
}
async function main(){
    // Replace with your own firebase initialization
    const db = firebase.firestore();
    const docRef = db.collection('counters').doc('myCounter');
    const updatedCounter = await incrementCounter(docRef);
    console.log('Counter updated to:', updatedCounter);
}
main();