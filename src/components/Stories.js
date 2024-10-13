import React from 'react';
import './Stories.css';
import { StoryCard1, StoryCard2 } from './StoryComponents/storyCard';

export function Stories() {
    return (
        <div className='story-section'>
            <h1 className='story-header'>Elevate Your Fitness with the Perfect Gym Partner</h1>
            <StoryCard1 title="&quot;Hi, I'm Jake&quot;" image="/images/person1.png" experience="2 years of gym experience" description="I was new to the gym at first, unsure of where to start, but everything changed when I met my gym partner through Cbum-connect. What started as workout sessions turned into a genuine friendship. Finding a gym partner didn’t just improve my fitness, it gave me a best friend for life."/>
            <StoryCard2 title="&quot;Hi, I'm Sarah&quot;" image="/images/person2.png" experience="5 years of gym experience" description="I joined a gym and wasn’t sure where to start. Through this app, I met my gym partner, Emily, who introduced me to a personalized workout routine. I’ve been sticking to that same routine for the past five years, and it’s transformed my fitness journey. Thanks to this I’ve achieved more than I ever thought possible!"/>
            <StoryCard1 title="&quot;Hi, I'm Chris&quot;" image="/images/person3.png" experience="30 years of gym experience" description="I was already experienced going to gyms, but had a hard time finding someone who can follow my routine and carry similar weights. Thanks to G-Connect, I was able to find many gym partners who I mentored and make a good relationship with."/>
        </div>
    );
};