import React from 'react';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';
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


// icons
import RunCircleIcon from '@mui/icons-material/RunCircle';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

// components imports
import Section from './../../components/Section/Section';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SideToSideSection from '../../components/SideToSideSection/SideToSideSection';
import Footer from '../../components/Footer/Footer';
import NavBar from './../../components/NavBar/NavBar';

//page style
import { useTheme } from '@emotion/react';
import testimonials from './../../data/testimonials';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import BusinessHintSection from '../../components/BusinessHintSection/BusinessHintSection';
import ImgWithTextSection from './../../components/ImgWithTextSection/ImgWithTextSection';

// data to use


const Home = () => {
  const theme = useTheme();

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

  const clientsImg = [
    {
      id: 1,
      img: client1
    }, {
      id: 2,
      img: client2
    }, {
      id: 3,
      img: client3
    }, {
      id: 4,
      img: client4
    }, {
      id: 5,
      img: client5
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
          top: -76,
          left: 0,
          zIndex: -1,
          display: { xs: 'none', sm: 'initial' }

        }}
      />
      <Grid item container xs={12}>
        <NavBar />
      </Grid>
      {/* header content section */}
      <Container>
        <Grid container justifyItems='center' alignItems='center'>
          <ImgWithTextSection>
            <Grid container item xs={12} md={4} spacing={3} justifyContent='center' alignItems='center' pt={{ xs: 3, md: 0 }}>
              <Grid item xs={12}>
                <Typography justifySelf='center' fontSize='24px' lineHeight='24px' color={{ xs: theme.colors.deepOrange, sm: theme.colors.white }}>Advanced Platform</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize='58px' lineHeight='68px' fontWeight='bold' color={{ xs: theme.colors.deepOrange, sm: theme.colors.white }}>Take your team to the next level</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize='18px' lineHeight='24px' color={{ xs: theme.colors.deepOrange, sm: theme.colors.white }} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ButtonComponent bgColor={{ xs: theme.colors.deepOrange, sm: theme.colors.white }} content='About us' textColor={{ xs: theme.colors.white, sm: theme.colors.deepOrange }} />
              </Grid>
            </Grid>
          </ImgWithTextSection>
          <Grid item container xs={12}>
            {clientsImg.map(item => (

              <Grid item width='211px' height='68px' key={item.id}>
                <Box
                  component='img'
                  src={item.img}
                  width='100%'
                  height='100%'
                />
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Container>
      {/* business solution section */}
      <Container>
        <Grid container xs={12} justifyContent='center' alignContent='center' mt={10} mb={10}>
          <BusinessHintSection
            heading='The best business solution for you'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
            showArrow={true}
          />
          <Grid item container xs={12} md={6} justifyItems='center' alignItems='center'>
            <Grid item container gap={2} xs={12} md={6} direction='column' pb={3}

            >
              <Grid item >
                <RunCircleIcon sx={{ padding: '1rem', backgroundColor: '#F1291E', borderRadius: '50%', color: '#fff', fontSize: '2.5rem', boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={theme.colors.textColor}>Scale Your Activity</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={theme.colors.textColor2}>
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
                <Typography variant='body1' color={theme.colors.textColor}>BootCamp</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={theme.colors.textColor2}>
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
                <Typography variant='body1' color={theme.colors.textColor}>Hight Quality</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={theme.colors.textColor2}>
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
                <Typography variant='body1' color={theme.colors.textColor}>Scale Your Activity</Typography>
              </Grid>
              <Grid>
                <Divider sx={{ backgroundColor: theme.colors.deepOrange, width: '4rem', height: '4px' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1' color={theme.colors.textColor2}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* Best Platform 1*/}
      <SideToSideSection>
        <ImgWithTextSection componentsDirectionInMD='row-reverse'>
          <BusinessHintSection
            heading='Best Platform for the Technological Era'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
            showArrow={true}
          />
        </ImgWithTextSection>

      </SideToSideSection>
      {/* platform overview */}
      <Container>
        <Grid container direction='column' justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Grid container item xs={12} sm={6} spacing={2} justifyContent='center' alignItems='center'>
            <Grid item xs={12} justifyContent='center' alignItems='center'>
              <Typography justifySelf='center' fontSize='1.75rem' lineHeight='24px' color='#8F8F8F'>Advanced Customer Service Platform</Typography>
            </Grid>
            <Grid item xs={12} justifyContent='center' alignItems='center'>
              <Typography fontSize='58px' lineHeight='68px' fontWeight='bold' color={theme.colors.textColor}>Platform Overview</Typography>
            </Grid>
            <Grid item xs={12} justifyContent='center' alignItems='center'>
              <Typography fontSize='18px' lineHeight='24px' color={theme.colors.textColor2} >
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
        <ImgWithTextSection >
          <BusinessHintSection
            heading='Best Platform for the Technological Era'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
            showArrow={false}
          />
        </ImgWithTextSection>
      </SideToSideSection>

      {/* Acceleration section */}
      <Container>
        <Grid container justifyContent='center' alignItems='center' mb={5}
          direction={{ xs: 'column', md: 'row' }}
          gap={2}
        >
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize='2rem' fontWeight='bold' color={theme.colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={theme.colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' />
            </Grid>

          </Grid>
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item container>
              <Typography fontSize='2rem' fontWeight='bold' color={theme.colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item container>
              <Typography color={theme.colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* caption section */}
      <Container>
        <Grid container justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Grid item xs={12} sm={8} md={3.5} >
            <Typography fontSize='2.3rem' fontWeight='bold' color={theme.colors.textColor}>
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
                <Typography fontSize='1.5rem' color={theme.colors.textColor2}>{item}</Typography>
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
              {testimonials.map((item) => (<TestimonialCard item={item} />))}
            </Carousel>
          </Grid>
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize='2rem' fontWeight='bold' color={theme.colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={theme.colors.textColor2}>
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