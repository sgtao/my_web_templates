// Intersection Observer appea
function isob_appear(el) {
  function isob_init(targetList){
    // targetにIntersectionObserver向けのクラスをふる
    targetList.forEach((target) => {
      target.classList.add('isob_elm');
    });
    // - callback関数を指定して、監視オブジェクトを生成
    const observer = new IntersectionObserver(callback, options);
    // targetを監視対象として指定する
    targetList.forEach((target) => {
      observer.observe(target);
    });
  }
  // IntersectionObserverの準備
  // - callback関数を定義
  function callback(entries, obs) {
    console.log(entries);
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
        // forEach では、continue; は使えないが、returnをすると次要素にスキップ
        する
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  // - Int.Observerのオプション設定(thresholdなど）
  const options = {
    threshold: 0.2,
    // rootMargin: '0px 0px -100px',
  };
  const targetList = document.querySelectorAll(el);
  isob_init(targetList);
}