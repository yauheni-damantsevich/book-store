import { useState, useEffect } from "react";
import instance from "./searchBooks";

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });
  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await instance.get(`/${data.slug}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);
  return { data, setData };
};

export default useFetch;
