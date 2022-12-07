import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react';

import Header from '../components/Header';
import Contacts from '../components/Contacts';

import '../styles/Principal.css'
import '../styles/bootstrap/bootstrap.css'


export const Home = () => {
    return (  
        <>
        <section className='principal'>
            <Header /> 
            <Container sx={{ padding:10, display:'flex',gap:10, alignItems:'center'}}>
                <Avatar alt='Flávio Henrique' src="https://thumbs2.imgbox.com/90/b9/0HtrPDN8_t.png" sx={{ width: 400, height: 400, flexGrow:0 }}/>
                <Box maxWidth='sm' sx={{display:'flex', flexDirection:'column', justifyContent:'center',flexGrow:2, textAlign:'center', backgroundColor:'white', borderRadius:5, width: 300, height: 250}}>
                    <Typography variant='h1' component='h1' color='darkblue' sx={{fontWeight:'bold'}}>Flávio</Typography>
                    <Typography component='h3' variant='h4' color='darkblue'>Estudante, Programador e um Desenvolver Feliz</Typography>
                </Box>
            </Container>
        </section>

        <section className='about-me-container' id='about-me'>
            <Box maxWidth='xl' sx={{width:'100%', height:350, backgroundColor:'white'}}>
                &nbsp;
                <Typography variant='h2' component='h2' textAlign='center' className='about-me-titulo'>Quem é Flávio?</Typography>
                <Typography variant='h5' component='p' textAlign='center' className='about-me-texto'>Olá, meu nome é Flávio Henrique e atualmente estudo no IFPB campus Cajazeiras e curso Análise e Desenvolvimento de Sistemas. Entusiasta de Front-End e amante da aprendizagem, gosto de me desafiiar e colocar metas para que possa evoluir cada dia mais meus conhecimentos e meu eu interior, por exemplo esse site feito com ReactJs e SCSS que aprendi recentemente. </Typography>
                &nbsp;
            </Box>
        </section>
        &nbsp;
        &nbsp;
        &nbsp;
        <section className='projetos-container'>
        &nbsp;
            <Typography variant='h2' component='h2' sx={{color: '#0d214f', textAlign:'center'}}>Projetos</Typography>
            <Container>
                
            </Container>
        </section>
        <section className='contatos-container'>
            <Container>
                <Contacts/>
            </Container>
        </section>
        </>
    );
}

