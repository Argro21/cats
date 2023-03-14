export class CatsInfo {
  constructor(selectorTemplate, handleDeleteCat) {
    this._selectorTemplate = selectorTemplate;
    this._handleDeleteCat = handleDeleteCat;
    this._data = {};
  }

  _getTemplate() {
    // возвращает содержимое шаблона в виде DOM узла
    return document.querySelector(this._selectorTemplate).content.children[0];
  }

  getElement() {
    this.element = this._getTemplate().cloneNode(true);

    this.catId = this.element.querySelector(".cat-info__id");
    this.buttonEdited = this.element.querySelector(".cat-info__edited");
    this.buttonDeleted = this.element.querySelector(".cat-info__deleted");
    this.catRate = this.element.querySelector(".cat-info__rate");
    this.catName = this.element.querySelector(".cat-info__name");
    this.catFavourite = this.element.querySelector(".cat-info__favourite");
    this.catAge = this.element.querySelector(".cat-info__age-val");
    this.catImage = this.element.querySelector(".cat-info__image");
    console.log(this.catImage);

    this.setEventListener();
    return this.element;
  }

  setData(cardInstance) {
    this._cardInstance = cardInstance;
    this._data = this._cardInstance.getData();
    this.catId.innerText = this._data.id;
    this.catName.innerText = this._data.name;
    this.catRate.innerText = this._data.rate;
    this.catAge.innerText = this._data.age;
    if (this._data.favorite) {
      this.catFavourite.classList.add("cat-info__favourite_active");
    } else {
      this.catFavourite.classList.remove("cat-info__favourite_active");
    }
    this.catImage.src = this._data.image;
  }

  setEventListener() {
    this.buttonDeleted.addEventListener("click", () =>
      this._handleDeleteCat(this._cardInstance)
    );
  }
}
