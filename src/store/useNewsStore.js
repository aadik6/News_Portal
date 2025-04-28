import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from '../firebase';

const useNews = create((set) => ({
    newsData: [],
    loading: true,
    error: null,
    setNews: (news) => set({ news }),

    fetchNews:async () => {
        try {
            const newsCollectionRef = collection(db, "News");
            const q = query(newsCollectionRef, orderBy("time", "desc"))
    
            const sortedDataaa = await getDocs(newsCollectionRef);
            console.log("sortedDataaa", sortedDataaa)
            const data = [];
            sortedDataaa.forEach((doc) => {
              data.push({ id: doc.id, ...doc.data() });
              // console.log(doc.data())
            });
            set({ newsData: data, loading: false });
            set({error: null});
          } catch (error) {
            set({ loading: false, error });
            console.error("Error fetching news data:", error);
            // Handle error
          }
    }

}))

export default useNews;