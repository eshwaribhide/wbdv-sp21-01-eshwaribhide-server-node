const quizzesService = require("../services/quiz-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
//        const quizzes = quizzesService.findAllQuizzes()
//        res.send(quizzes)
    quizzesService.findAllQuizzes()
    .then((quizzes) => {res.send(quizzes)
    })
    }
    const findQuizById = (req, res) => {
//        const quizId = req.params['qid']
//        const quiz = quizzesService.findQuizById(quizId)
        quizzesService.findQuizById(quizId)
        .then((quiz) => {res.send(quizzes)
        })

    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}
