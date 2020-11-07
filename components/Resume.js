import Link from 'next/link';
import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const Resume = (props) => {

  const createJobGroup = (jobs) => {
    const makeHeaderLink = (job) =>{  
      if(job.link === 'none'){
        return(
          <>
            {job.company}
          </>
        );
      }
      return(
        <a href={job.link} target='_blank'>{job.company}</a> 
      );
    };
    return (
      <div>
        {jobs.map(function(job,index) {
          return (
            <div key={index}>
              
              {makeHeaderLink(job)} 
              <br></br>
              <small>
                <span>
                  {job.type} - {job.roll} 
                </span>
                <span className='time'>
                  {job.time}
                </span>
              </small>
              <ul className='mt-1'>
                {(job.whathappened).map(function(whatidid,index){
                  return (
                    <li key={index}>{whatidid}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    ); 
  };

  const createRelevantCourseworkGroup = (classes) => {
    return(
      <div className='row'>
        {classes.map(function(c, index){
          return(
            <li className='col-lg-6 col-md-6 col-12 mb-1' key={index}>
              {c}
            </li>
          );
        })}
      </div>
    );
  };

  const createProjectsGroup = (projects) => {
    const makeHeaderLink = (project) =>{  
      if(project.link === 'TBD'){
        return(
          <>
            {project.name} - Coming Soon
          </>
        );
      }
      return(
        <a href={project.link} target='_blank'>{project.name}</a> 
      );
    };
      
    return (
      <>
        {projects.map(function(project, index) {
          return (
            <div className='mb-2' key={index}>
              {makeHeaderLink(project)}
              <br></br>
              <ul>
                <li>{project.description}</li>
              </ul>
            </div>
          );
        })}
      </>
    );      
  };

  const createSportsGroup = (sports) =>{
    return (
      <>
        {sports.map(function(sport, index) {
          return (
            <div className='mb-2' key={index}>
              {sport.name}<br></br>
              <small>
                <span>{sport.position}</span>
                <span className='time'>{sport.time}</span>
              </small>
              <ul>
                {(sport.accolades).map(function(element, index){
                  return (
                    <li key={index}>{element}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </>
    );    
  };

  const createLanguageGroup = (languages) =>{
    return (
      <>
        {languages.map(function(language, index) {
          return (
            <div className='mb-2' key={index}>
              {language.name}<br></br>
              <small>
                <span>{language.level}</span>
                <span className='time'>{language.years}</span>                  
              </small>
            </div>
          );
        })}
      </>
    );    
  };

  const downloadResume = () =>{
    console.log('download');
  };

  return (
    <div className='container'>
      <div className='row'>
        <Card className='justify-content-center col-lg-10 offset-lg-1 col-12'>
          <Card.Body>
            <Card.Title className='text-center'> Michael Di Paolo </Card.Title>
            <Card.Subtitle className='mb-2 text-muted text-center'>Chicago, Illinois - notdipaolo@outlook.com</Card.Subtitle>  
            <ListGroup variant='flush'>
              <ListGroup.Item> 
                <h5>Education</h5>
                      DePaul University <br></br> 
                <small>
                  <span>Bachelor of Science in Computer Science - Software Development </span>
                  <span className='time'>2016-2020</span>
                </small>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Work Experience</h5>
                {createJobGroup(props.resume.jobs)}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Additional Industry Experience</h5>
                {createJobGroup(props.resume.additionalIndustryExperience)}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Relevant Coursework</h5>
                {createRelevantCourseworkGroup(props.resume.relevantCoursework)}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Projects</h5>
                {createProjectsGroup(props.resume.projects)}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Sports</h5>
                {createSportsGroup(props.resume.sports)}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Languages</h5>
                {createLanguageGroup(props.resume.languages)}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <div className='d-flex justify-content-center'>
        <Link href='https://docs.google.com/document/d/1-Ku10-hAdYTZ-hPqycWNcw-hV2pFshY6cg7rb8rzHbo/edit?usp=sharing'>
          <a target='_blank'>
              Download
          </a>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  const resume = state.resumeReducer;
  return {
    resume: resume,
  };
}

export default connect(mapStateToProps)(Resume);