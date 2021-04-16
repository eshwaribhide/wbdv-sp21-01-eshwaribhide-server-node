module.exports = (app) => {
    const questionService = require("../services/questions-service")

    const findAllQuestions = (req, res) => {
//        const questions = questionService.findAllQuestions()
//        res.send(questions)
    questionService.findAllQuestions().then((questions => {res.send(questions)}))
    }

    const findQuestionsForQuiz = (req, res) => {
    questionService.findQuestionsForQuiz(quizId).then((questions) => {res.send(questions)})

//        const quizId = req.params.qid;
//        const questions = questionService.findQuestionsForQuiz(quizId);
//        res.send(questions);
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
}