// import '../css/style.css'

// export default class LoadMoreBtn {
//     constructor ({ selector, hidden = false}) {
//         this.refs = this.getRefs(selector);

//         hidden && this.hide();
//     }

//     getRefs(selector) {       
//         const refs = [];
//         refs.btn = document.querySelector(selector);

//         return refs;
//     }

//     enable() {
//         this.refs.btn.disabled = false;
//     }

//     disabled() {
//         this.refs.btn.disabled = true;
//     }

//     show() {
//         this.refs.btn.classList.remove('is-hidden');
//     }

//     hide() {
//         this.refs.btn.classList.add('is-hidden');
//     }
// }