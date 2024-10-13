import React from 'react';
import './storyCard.css';

export function StoryCard1({ title, image, experience, description }) {
    return (
        <div className='story-card'>
            <div className='image-container'>
                <div className="profile-image">
                    <img src={image} alt={title} className="story-image" />
                </div>
            </div>
            <div className='card-container'>
                <div className="card">
                    <div className='main-section'>
                        <div className="main-content">
                            <h3 className="story-title">{title}</h3>
                            <div className='subtext'>
                                <p className="experience-info">{experience}</p>
                                <p className="story-description">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function StoryCard2({ title, image, experience, description }) {
    return (
        <div className='story-card'>
            <div className='card-container-flip'>
                <div className="card">
                    <div className='main-section'>
                        <div className="main-content">
                            <h3 className="story-title">{title}</h3>
                            <div className='subtext'>
                                <p className="experience-info">{experience}</p>
                                <p className="story-description">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-container'>
                <div className="profile-image">
                    <img src={image} alt={title} className="story-image" />
                </div>
            </div>
        </div>
    );
}