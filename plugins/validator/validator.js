class Validator {
    constructor(options) {
        this.form = document.querySelector(options.selector);
        this.pattern = options.pattern;
        this.method = options.method;
        this.elementsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button');
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.form.addEventListener('submit', e => {
            this.elementsForm.forEach(elem => this.checkIt({target: elem}));
            if (this.error.size) {
                e.preventDefault();
            }
        });
    }

    isValid(elem) {
        const validatorMethod = {
            notEmpty(elem) {
                if (elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern) {
                return pattern.test(elem.value);
            },
            email(elem) {
                return /\S+@\S+\.\S+/.test(elem.value);
            }
        };

        if (this.method) {
            const methods = this.method[elem.name];
            if (methods) {
                return methods.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
            }
        } else {
            console.warn('Необходимо передать id полей ввода и методы проверки этих полей');
        }

        return true;
    }

    checkIt(event) {
        const target = event.target;
        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.add('error');
        elem.classList.remove('success');
    }

    showSuccess(elem) {
        elem.classList.add('success');
        elem.classList.remove('error');
    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green;
            }
            input.error {
                border: 2px solid red;
            }
        `;
        document.head.appendChild(style);
    }

    setPattern() {
        if (!this.pattern.phone) {
            this.pattern.phone = /^\+972-?\d{1,2}-?\d{3}-?\d{4}$/;
        }
        if (!this.pattern.email) {
            this.pattern.email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        }
    }
}