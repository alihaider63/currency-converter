import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=cur_live_kVhalTPHkWtFocPEU6DPURjouW8a5NpX4yNTbRWa&currencies=&base_currency=${currency}`
    )
      .then((res) => res.json())
      .then((jsonRes) => {
        setData(jsonRes["data"]);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
