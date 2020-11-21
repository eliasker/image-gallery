import { useState, useEffect } from "react";

import { projectFirestore } from "../firebase/config";
import { Picture, Category } from "../types";

/**
 *  TODO: Fix const documents: any
 *  TODO: Add timestamp field
 *  TODO: Order documents by timestamp (newest first)
 * @param {*} collection Name of the collection in firebase
 */
const useFirestore = (collectionName: string): Category => {
  const [images, setimages] = useState<Picture[]>([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collectionName)
      //Callback function fires once initially and
      //each time collection updates
      .onSnapshot((snapshot) => {
        const documents: any = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setimages(documents);
      });
    // Clean-up function that unsubscribes from the collection
    return () => unsub();
  }, [collectionName]);
  return { images };
};

export default useFirestore;
