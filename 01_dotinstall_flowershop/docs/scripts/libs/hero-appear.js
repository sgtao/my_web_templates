// hero appear
function hero_appear() {
  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      // インクリメント後、img要素配列の（長さ - 1）で先頭に戻す
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play(); // ２回目以降の呼び出し
    }, 5000);
  }
  let currentIndex = 0;
  const images = document.querySelectorAll('.hero img');
  play(); // 初回の呼び出し
}