import React from 'react';
import { Box, Container, createTheme, Typography, Grid, Divider, Paper, Button, Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CountUp from 'react-countup';

// images
import backGroundHeaderImage from './../../assets/header/header-backGround.png';
import client1 from './../../assets/header/Clients/client-1.png';
import client2 from './../../assets/header/Clients/client-2.png';
import client3 from './../../assets/header/Clients/client-3.png';
import client4 from './../../assets/header/Clients/client-4.png';
import client5 from './../../assets/header/Clients/client-5.png';
import chartImage from './../../assets/pageContentImages/Chart.png';
import client from './../../assets/ourTeam/shutterstock_45.png';

// icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

// components imports
import Section from './../../components/Section/Section';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SideToSideSection from '../../components/SideToSideSection/SideToSideSection';

//page style
import Footer from '../../components/Footer/Footer';
import NavBar from './../../components/NavBar/NavBar';


const Home = () => {

  const colors = {
    white: '#fff',
    deepOrange: '#FF6057',
    textColor: '#3B3A3A',
    textColor2: '#8F8F8F'
  };

  const chartItems = [
    {
      img: chartImage
    },
    {
      img: chartImage
    },
    {
      img: chartImage
    }
  ];

  const ourClients = [
    {
      id: 1,
      img: client,
      name: 'Florrie Jacobs',
      title: 'CEO of Company',
      dis: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      rating: 5
    },
    {
      id: 2,
      img: client,
      name: 'Florrie Jacobs',
      title: 'CEO of Company',
      dis: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      rating: 4.5
    },
    {
      id: 3,
      img: client,
      name: 'Florrie Jacobs',
      title: 'CEO of Company',
      dis: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      rating: 3
    }
  ];
  return (
    <Section >
      <Box
        component='img'
        src={backGroundHeaderImage}
        sx={{
          backgroundSize: 'cover',
          objectFit: 'contain',
          width: '100%',
          maxWidth: '100%',
          position: 'absolute',
          top: { xs: 0, md: -76 },
          left: 0,
          zIndex: -1
        }}
      />
      <Grid item container xs={12}>
        <NavBar />
      </Grid>
      {/* header content section */}
      <Container>
        <Grid container justifyItems='center' alignItems='center'>
          <Grid
            xs={12}
            item
            container
            justifyContent='center'
            alignItems='center'
            flexWrap='nowrap'
            direction={{ xs: 'column', md: 'row' }}

          >
            <Grid container item xs={12} md={4} spacing={3} justifyContent='center' alignItems='center'>
              <Grid item xs={12}>
                <Typography justifySelf='center' fontSize='24px' lineHeight='24px' color={colors.white}>Advanced Platform</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize='58px' lineHeight='68px' fontWeight='bold' color={colors.white}>Take your team to the next level</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize='18px' lineHeight='24px' color={colors.white} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ButtonComponent bgColor='#fff' content='About us' textColor={colors.deepOrange} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                component='img'
                src={chartImage}
                height='100%'
                sx={{ width: '100%', height: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client1}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client2}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client3}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client4}
                width='100%'
                height='100%'
              />
            </Grid>
            <Grid item width='211px' height='68px'>
              <Box
                component='img'
                src={client5}
                width='100%'
                height='100%'
              />
            </Grid>

          </Grid>

        </Grid>
      </Container>
      {/* business solution section */}
      <Container>
        <Grid container xs={12} justifyContent='center' alignContent='center' mt={10} mb={10}>
          <Grid item container xs={12} md={6} justifyContent='center' pr={8} alignItems='flex-start' >
            <Grid item container direction='column' xs={12} >
              <Grid item container xs={12} md={6} spacing={3}>
                <Grid item>
                  <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
                </Grid>
                <Grid item>
                  <Typography fontSize='2.3rem' color={colors.textColor} fontWeight='bold'>
                    The best business solution for you
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                  </Typography>
                </Grid>
                <Grid item container spacing={5} >
                  <Grid item>
                    <Typography variant='body1' sx={{ color: colors.deepOrange, cursor: 'pointer' }}>Learn About Our Success</Typography>
                  </Grid>
                  <Grid item>
                    <Typography color={colors.deepOrange} sx={{ cursor: 'pointer' }}><ArrowRightAltIcon /></Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6} justifyItems='center' alignItems='center'>
            <Grid item container gap={2} xs={12} md={6} direction='column' pb={3}

            >
              <Grid item >
                <RunCircleIcon sx={{ padding: '1rem', backgroundColor: '#F1291E', borderRadius: '50%', color: '#fff', fontSize: '2.5rem', boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor}>Scale Your Activity</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

                </Typography>
              </Grid>
            </Grid>
            <Grid item container gap={2} xs={12} md={6} direction='column' pb={3}

            >
              <Grid item >
                <FormatBoldIcon sx={{ padding: '1rem', backgroundColor: '#36C5AD', borderRadius: '50%', color: '#fff', fontSize: '2.5rem', boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor}>BootCamp</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

                </Typography>
              </Grid>
            </Grid>
            <Grid item container gap={2} xs={12} md={6} direction='column' pb={3}

            >
              <Grid item >
                <HighQualityIcon sx={{ padding: '1rem', backgroundColor: '#CB4BF8', borderRadius: '50%', color: '#fff', fontSize: '2.5rem', boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor}>Hight Quality</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

                </Typography>
              </Grid>
            </Grid>
            <Grid item container gap={2} xs={12} md={6} direction='column' pb={3}

            >
              <Grid item >
                <HomeRepairServiceIcon sx={{ padding: '1rem', backgroundColor: '#56E65B', borderRadius: '50%', color: '#fff', fontSize: '2.5rem', boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor}>Scale Your Activity</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={colors.textColor2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* Best Platform 1*/}
      <SideToSideSection>
        <Grid
          xs={12}
          item
          container
          justifyContent='center'
          alignItems='center'
          flexWrap='nowrap'
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={12} md={8}>
            <Box
              component='img'
              src={chartImage}
              height='100%'
              sx={{ width: '100%', height: '100%' }}
            />
          </Grid>
          <Grid item container xs={12} md={6} spacing={3}>
            <Grid item>
              <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
            </Grid>
            <Grid item>
              <Typography fontSize='2.3rem' color={colors.textColor} fontWeight='bold'>The best business solution for you
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
              </Typography>
            </Grid>
            <Grid item container spacing={5} >
              <Grid item>
                <Typography variant='body1' sx={{ color: colors.deepOrange, cursor: 'pointer' }}>Learn About Our Success</Typography>
              </Grid>
              <Grid item>
                <Typography color={colors.deepOrange} sx={{ cursor: 'pointer' }}><ArrowRightAltIcon /></Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </SideToSideSection>
      {/* platform overview */}
      <Container>
        <Grid container direction='column' justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Grid container item xs={12} sm={6} spacing={2} justifyContent='center' alignItems='center'>
            <Grid item xs={12} >
              <Typography justifySelf='center' fontSize='1.75rem' lineHeight='24px' color='#8F8F8F'>Advanced Customer Service Platform</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize='58px' lineHeight='68px' fontWeight='bold' color={colors.textColor}>Platform Overview</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize='18px' lineHeight='24px' color={colors.textColor2} >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} >
            <Carousel sx={{ width: '100%' }}>
              {
                chartItems.map((item, i) =>
                (<Box p={0} key={i}>
                  <Box
                    component='img'
                    src={item.img}
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>)
                )
              }
            </Carousel>
          </Grid>
        </Grid>
      </Container >


      {/* Best Platform 2*/}
      <SideToSideSection>
        <Grid
          item
          container
          xs={12}
          justifyContent='center'
          alignItems='center'
          flexWrap='nowrap'
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item container xs={12} md={6} spacing={3}>
            <Grid item>
              <Divider sx={{ backgroundColor: colors.deepOrange, width: '4rem', height: '4px' }} />
            </Grid>
            <Grid item>
              <Typography fontSize='2.3rem' color={colors.textColor} fontWeight='bold'>The best business solution for you
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
              </Typography>
            </Grid>
            <Grid item container spacing={5} >
              <Grid item>
                <Typography variant='body1' sx={{ color: colors.deepOrange, cursor: 'pointer' }}>Learn About Our Success</Typography>
              </Grid>
              <Grid item>
                <Typography color={colors.deepOrange} sx={{ cursor: 'pointer' }}><ArrowRightAltIcon /></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12} >
            <Box
              component='img'
              src={chartImage}
              sx={{ width: '100%', height: '100%' }}
            />
          </Grid>
        </Grid>
      </SideToSideSection>

      {/* Acceleration section */}
      <Container>
        <Grid container justifyContent='center' alignItems='center' mb={5}
          direction={{ xs: 'column', md: 'row' }}
          gap={2}
        >
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize='2rem' fontWeight='bold' color={colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' />
            </Grid>

          </Grid>
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize='2rem' fontWeight='bold' color={colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' />
            </Grid>

          </Grid>
        </Grid>
      </Container>

      {/* caption section */}
      <Container>
        <Grid container justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Grid item xs={12} sm={8} md={3.5} >
            <Typography fontSize='2.3rem' fontWeight='bold' color={colors.textColor}>
              Don't Just Take our Word for it!
            </Typography>
          </Grid>
        </Grid>
      </Container>;

      {/* Counters Section */}
      <Container>
        <Grid container justifyContent='center' alignItems='center' mt={10} mb={5}>
          {['Download', 'Active User', 'Positive Feedback', '+ rating'].map(item => (
            <Grid item container justifyContent='center' sx={8} md={4} lg={3} alignItems='center' direction='column' gap={1}>
              <Grid item >
                <CountUp end={570} enableScrollSpy='true' style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#FF6057' }} />
              </Grid>
              <Grid item >
                <Typography fontSize='1.5rem' color={colors.textColor2}>{item}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>;

      {/* testimonials section */}
      <Container>
        <Grid container justifyContent='center' alignItems='center' mb={5}
          direction={{ xs: 'column', md: 'row' }}
          gap={2}
        >
          <Grid container item xs={12} md={5} justifyContent='center' alignItems='center'>
            <Carousel sx={{ width: '100%' }}>
              {
                ourClients.map((item) =>
                (<Paper key={item.id} sx={{ boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} p={0}>
                  <Grid container p={1} direction='row' justifyContent='center' alignItems='center'>
                    <Grid item xs={5} gap={2}>
                      <Box component='img' src={item.img} />
                    </Grid>
                    <Grid xs={5} gap={1.5} item container direction='column'>
                      <Grid item>
                        <Typography fontSize='24px' color={colors.textColor}>
                          {item.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography fontSize='14px' color={colors.textColor2}>
                          {item.dis}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Rating
                          color='#CB48F9'
                          value={item.rating}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>))
              }
            </Carousel>
          </Grid>
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize='2rem' fontWeight='bold' color={colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' />
            </Grid>

          </Grid>
        </Grid>
      </Container>;

      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333333' }}>
        <Section>
          <Footer />
        </Section>
      </Box>
    </Section >
  );
};

export default Home;