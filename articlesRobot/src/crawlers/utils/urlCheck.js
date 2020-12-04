const urlCheck = (urlAddress) => {
    
  const regex = "jspoint";
  const found = urlAddress.search(regex);
  if (found >= 0) {
    return(urlAddress);
  }
};

module.exports = urlCheck;
