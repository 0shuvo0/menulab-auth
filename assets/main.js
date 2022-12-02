const smartPwdInputs = [...document.querySelectorAll('.smart-password-input')]
smartPwdInputs.forEach(i => createSmartPwdInput(i))

function createSmartPwdInput(el){
    const input = el.querySelector('input')
    const progressBar = el.querySelector('.password-strength-bar')
    const progress = progressBar.querySelector('.password-strength-progress')
    const info = el.querySelector('.password-strength-info')
    const pgTextEl =  info.querySelector('span')
    const eyeBtn = el.querySelector('.hide-show')
    const check = el.dataset.strengthcheck
    
    eyeBtn.addEventListener('click', function(){
        if(this.classList.contains('bi-eye')){
            this.classList.remove('bi-eye')
            this.classList.add('bi-eye-slash')
            input.setAttribute('type', 'text')
        }else{
            this.classList.remove('bi-eye-slash')
            this.classList.add('bi-eye')
            input.setAttribute('type', 'password')
        }
    })

    input.addEventListener('keyup', function(){
        if(check !== 'allow') return
        progressBar.style.display = 'block'
        info.style.display = 'block'

        const val = this.value.trim()
        const score = passStrength(val)

        if(score >= 90){
                pgTextEl.innerText = 'Very Secure'
                pgTextEl.style.color = '#5261F5'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#5261F5' 
            }else if(score >= 80){
                pgTextEl.innerText = 'Secure'
                pgTextEl.style.color = '#5261F5'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#5261F5' 
            }else if(score >= 70){
                pgTextEl.innerText = 'Very Strong'
                pgTextEl.style.color = '#6D9D5B'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#6D9D5B' 
            }else if(score >= 60){
                pgTextEl.innerText = 'Strong'
                pgTextEl.style.color = '#6D9D5B'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#6D9D5B' 
            }else if(score >= 50){
                pgTextEl.innerText = 'Average'
                pgTextEl.style.color = '#eeb12e'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#eeb12e' 
            }else if(score >= 30){
                pgTextEl.innerText = 'Weak'
                pgTextEl.style.color = '#CC686E'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#CC686E' 
            }else{
                pgTextEl.innerText = 'Very Weak'
                pgTextEl.style.color = '#CC686E'
                progress.style.width = score + '%'
                progress.style.backgroundColor = '#CC686E' 
            }
    })
}