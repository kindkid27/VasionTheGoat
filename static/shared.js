
document.addEventListener('DOMContentLoaded', () => {
  const lastUrl = localStorage.getItem('lastUrl');
  const lastBgImageData = localStorage.getItem('bgImageData');

  console.log('lastUrl:', lastUrl);
  console.log('lastBgImageData:', lastBgImageData);

  if (lastUrl) {
      console.log('Applying lastUrl:', lastUrl);
      document.body.style.backgroundImage = `url(${lastUrl})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
  } else if (lastBgImageData) {
      console.log('Applying lastBgImageData:', lastBgImageData);
      document.body.style.backgroundImage = `url(${lastBgImageData})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
  } else {
      console.log('No valid background data found in localStorage');
  }
});