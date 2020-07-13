window.addEventListener('load', function () {
  const food = document.getElementById('food');
  const category = document.getElementById('category');
  category.addEventListener('change', changeCategory);

  function changeCategory() {
    let changedCategory = category.value;
    if (changedCategory === '0') {
      setJFootds();
    } else if (changedCategory === '1') {
      setAsianFoods();
    } else {
      setEuropeFoods();
    }
  }

  function setJFootds() {
    food.textContent = null;
    const jFoods = [
      { cd: '', label: '選択してください' },
      { cd: '0', label: '寿司' },
      { cd: '1', label: 'おでん' },
      { cd: '2', label: 'そば' },
    ];
    const fragment = document.createDocumentFragment();
    jFoods.forEach(function (value) {
      const op = document.createElement('option');
      op.value = value.cd;
      op.text = value.label;
      fragment.appendChild(op);
    });
    food.appendChild(fragment);
  }
  function setAsianFoods() {
    food.textContent = null;
    const asianFoods = [
      { cd: '', label: '選択してください' },
      { cd: '3', label: 'インドネシア料理' },
      { cd: '4', label: 'ベトナム料理' },
      { cd: '5', label: 'インド料理' },
    ];
    const fragment = document.createDocumentFragment();
    asianFoods.forEach(function (value) {
      const op = document.createElement('option');
      op.value = value.cd;
      op.text = value.label;
      fragment.appendChild(op);
    });
    food.appendChild(fragment);
  }
  function setEuropeFoods() {
    food.textContent = null;
    const europeFoods = [
      { cd: '', label: '選択してください' },
      { cd: '6', label: 'イタリア料理' },
      { cd: '7', label: 'カリフォルニア料理' },
      { cd: '8', label: 'モロッコ料理' },
    ];
    const fragment = document.createDocumentFragment();
    europeFoods.forEach(function (value) {
      const op = document.createElement('option');
      op.value = value.cd;
      op.text = value.label;
      fragment.appendChild(op);
    });
    food.appendChild(fragment);
  }
});
