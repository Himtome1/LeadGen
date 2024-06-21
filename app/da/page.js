"use client"
export default function Page(){
    sessionStorage.setItem('quiz', 'this is a quiz')
    let quizStorage = sessionStorage.getItem('quiz');
    if(quizStorage) {
        console.log(quizStorage)
    } else {
        console.log('no quiz')
    }
    return(
        <div className="w-full h-full">
            <h1>Page</h1>
        </div>
    )
}