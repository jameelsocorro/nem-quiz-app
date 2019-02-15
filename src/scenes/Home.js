import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { NemQuizCard, NemNavBar, Box } from "../components";

const quizzes = [
    {
        id: 1,
        type: 'Logo',
        title: 'NEM Ecosystem',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    },
    {
        id: 2,
        type: 'General',
        title: 'Test Quiz 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    },
    {
        id: 3,
        type: 'Logo',
        title: 'Test Quiz 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageSrc: 'quiz-card.jpeg'
    }
];

class Home extends Component {
    render() {
        const { theme } = this.props;
        return (
            <Box className="app-max-height"
                    display="flex" flexDirection="column">
                <NemNavBar></NemNavBar>
                <Box p={2} flexGrow={2} bgColor={theme.palette.background.default}>
                {
                    quizzes.map(function (quiz, index) {
                        return <NemQuizCard key={index} {...quiz} cardImage={require(`../assets/images/${quiz.imageSrc}`)}></NemQuizCard>
                    })
                }
                </Box>
            </Box>
        );
    }
}

export default withTheme()(Home);
