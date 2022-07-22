import { onValue, ref, remove, set, update } from 'firebase/database';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { uid } from 'uid';
import { db, dbFs } from '../firebase';
import { GET_WISH_LIST, GET_WISH_LIST_FS } from '../redux/consts/const';

export const handleAddWishList = (product_item) => {
  return async () => {
    try {
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
        product_item,
        uuid,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const handleAddWishListFS = (product_item) => {
  return async () => {
    try {
      const data = await addDoc(collection(dbFs, 'wish_list'), {
        product_item,
      });
      return data;
    } catch (error) {
      console.log({ error });
    }
  };
};

export const handleGetWishList = () => {
  return async (dispatch) => {
    try {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        dispatch({ type: GET_WISH_LIST, payload: data })
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const handleGetWishListFS = () => {
  return async (dispatch) => {
    try {
      const q = query(collection(dbFs, 'wish_list'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        if (querySnapshot) {
          console.log(querySnapshot);
          dispatch({ type: GET_WISH_LIST_FS, payload: querySnapshot });
        }
      });
      return () => unsub();
    } catch (error) {
      console.log({ error });
    }
  };
};

export const handleDeleteWish = (uuid) => {
  return async (dispatch) => {
    try {
      await remove(ref(db, `/${uuid}`));
      Promise.all([dispatch(handleGetWishList())])
    } catch (error) {
      console.log({ error });
    }
  };
};

export const handleUpdateWish = (uuidTemporate, product_item) => {
  return async () => {
    try {
      update(ref(db, `/${uuidTemporate}`), {
        product_item,
        uuid: uuidTemporate,
      });
    } catch (error) {
      console.log({ error });
    }
  };
};
