 export const exerciseOptions = {
  method: 'GET',
  headers: {
    
    'X-RapidAPI-Key':'59f6a2a4b9mshd781de2a12b419fp1da56bjsn98adf65a2b5a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
export const youtubeOptions = {
  method: 'GET',
 
  headers: {
   


    'X-RapidAPI-Key': '47cf0ce129msh5ed8407b5cbfadbp1703efjsn6d6598d0806f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
