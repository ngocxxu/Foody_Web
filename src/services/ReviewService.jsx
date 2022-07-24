import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { dbFs } from '../firebase';
import { GET_REVIEW } from '../redux/consts/const';

export const handleAddReviewFS = (review) => {
  return async (dispatch) => {
    try {
      const data = await addDoc(collection(dbFs, 'reviews_data'), {
        review,
      });
      if(data){
        dispatch(handleGetReviewFS())
      }
      return data;
    } catch (error) {
      console.log({ error });
    }
  };
};

export const handleGetReviewFS = () => {
  return async (dispatch) => {
    try {
      const q = query(collection(dbFs, 'reviews_data'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let newArray = [];
        querySnapshot.forEach((r) => {
          newArray.push({ ...r.data(), id: r.id });
        });
        dispatch({ type: GET_REVIEW, payload: newArray });
      });
      return () => unsub();
    } catch (error) {
      console.log({ error });
    }
  };
};
