import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NemQuizCard, NemNavBar, Box } from "../components";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuizzes, getQuizItems } from "../actions/quiz";

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.default
    },
    cardContainer: {
        flexGrow: 2,
        paddingBottom: 0,
        maxWidth: theme.maxWidth,
        margin: 'auto',

        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
            paddingRight: 0,
            overflow: 'auto'
        }
    }
});

class Home extends Component {
    
    state = {}

    componentDidMount() {
        this.props.getQuizzes().then(() => {
            this.setState({ isLoading: false});            
        });

        this.props.getQuizItems().then(() => {
            this.setState({ isLoading: false});   
            this.assignRandomQuizItems();       
        });
    }

    getRandomQuizItem(quizitems) {
        return quizitems[Math.floor(Math.random() * quizitems.length)];
    }

    assignRandomQuizItems() {
        const self = this;
        let randomQuizItems = [];
        this.props.quizzes.map(function (quiz) {
            while (randomQuizItems.length < 10) {
                const quizItem = self.getRandomQuizItem(self.props.quizItems);
                const isExisting = randomQuizItems.find(m => m.quizitemid === quizItem.quizitemid);
                if (!isExisting) {
                    randomQuizItems.push(quizItem);
                }
            }
        }); 
    }

    onQuizClick = quiz => {
        this.props.history.push(`/quiz/${quiz.id}/1`)

    }

    render() {
        const self = this;
        return (
            <Box className={this.props.classes.root}
                    display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box className={this.props.classes.cardContainer} p={2}>
                {
                    (this.props.quizzes && this.props.quizzes.length > 0) &&
                    this.props.quizzes.map(function (quiz, index) {
                        return (
                            <NemQuizCard
                                onClick={() => self.onQuizClick(quiz)}
                                key={index}
                                title={quiz.title}
                                description= {quiz.description}
                                quiztype= {quiz.quiztype}
                                cardImage={require(`../assets/images/${quiz.imagesrc}`)}/>                         
                        )
                    })
                }
                </Box>
            </Box>
        );
    }
}

function mapStateToProps(state) {
    const { quizzes, quizItems, error } = state.quiz;
    return {
        quizzes: quizzes || [],
        quizItems: quizItems || [],
        error
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { getQuizzes, getQuizItems },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));