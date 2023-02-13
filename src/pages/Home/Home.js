import React from 'react';
import { Box, Container, Typography, Grid, Divider, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


// images
import backGroundHeaderImage from './../../assets/header/header-backGround.png';
import client1 from './../../assets/header/Clients/client-1.png';
import client2 from './../../assets/header/Clients/client-2.png';
import client3 from './../../assets/header/Clients/client-3.png';
import client4 from './../../assets/header/Clients/client-4.png';
import client5 from './../../assets/header/Clients/client-5.png';
import chartImage from './../../assets/pageContentImages/Chart.png';
import chartImageCroped from './../../assets/pageContentImages/Croped-Chart.png';


// icons
import RunCircleIcon from '@mui/icons-material/RunCircle';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

// components imports
import ButtonComponent from '../../components/Button/ButtonComponent';
import SideToSideSection from '../../components/SideToSideSection/SideToSideSection';
import Footer from '../../components/Footer/Footer';
import NavBar from './../../components/NavBar/NavBar';

//page style
import testimonials from './../../data/testimonials';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import BusinessHintSection from '../../components/BusinessHintSection/BusinessHintSection';
import ImgWithTextSection from './../../components/ImgWithTextSection/ImgWithTextSection';
import ServiceComponent from '../../components/ServiceComponent/ServiceComponent';
import Counter from '../../components/Counter/Counter';

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
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero background Image */}
      <Box
        component='img'
        src={backGroundHeaderImage}
        sx={{
          backgroundSize: 'cover',
          objectFit: 'contain',
          width: '100%',
          maxWidth: { sm: '150%' },
          position: 'absolute',
          top: {
            lg: -10, xl1: -100, xl2: -100, xl3: -150, xl4: -200, xl5: -250, xl6: -300, xl7: -350, xl8: -400
          },
          left: 0,
          zIndex: -1,
          display: { xs: 'none', md: 'initial' },
        }}
      />

      {/* NavBar */}
      <Grid item container xs={12}>
        <NavBar />
      </Grid>

      {/* header content section */}
      <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
        <Grid container justifyItems='center' alignItems='center' >
          <ImgWithTextSection displayImg='none' IMG={chartImage}>
            <Grid item container xs={12} md={4} gap={{ xs: 1.5, md: 4 }} justifyContent='center' alignItems='center' pt={{ xs: 3, md: 0 }}>
              <Grid item xs={12}>
                <Typography
                  justifySelf='center'
                  fontSize={{ xs: '16px', md: '18px', lg: '20px', xl: '24px' }}
                  lineHeight='24px'
                  color={{ xs: theme.colors.deepOrange, md: theme.colors.white }}>
                  Advanced Platform
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  fontSize={{ xs: '30px', md: '40', lg: '58px' }}
                  lineHeight={{ xs: '40px', lg: '68px' }} fontWeight='bold' color={{ xs: theme.colors.deepOrange, md: theme.colors.white }}
                >Take your team to the next level</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize={{ xs: '14px', lg: '18px' }} lineHeight='24px' color={{ xs: theme.colors.deepOrange, md: theme.colors.white }} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ButtonComponent bgColor={{ xs: theme.colors.deepOrange, md: theme.colors.white }} content='About us' textColor={{ xs: theme.colors.white, md: theme.colors.deepOrange }} width={{ xs: '120px', md: '178px' }} />
              </Grid>
            </Grid>
          </ImgWithTextSection>
          <Grid item container justifyItems='center' alignItems='center'>
            {clientsImg.map(item => (
              <Grid item width={{ xs: '120px', md: '180px', lg: '211px' }} height={{ xs: '', md: '68px' }} key={item.id} margin='0 auto'>
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
      </Container >

      {/* business solution section */}
      < Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
        <Grid container xs={12} gap={{ xs: 5, md: 0 }} justifyContent='center' alignContent='center' mt={10} mb={10}>
          <BusinessHintSection
            heading='The best business solution for you'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
            showArrow={true}
          />
          <Grid item container xs={12} md={6} justifyContent='center' gap={{ sm: 1, md: 0 }} alignItems='center'>
            <ServiceComponent heading='Scale Your Activity'>
              <RunCircleIcon sx={{ padding: { xs: '.5rem', md: '1rem' }, backgroundColor: '#F1291E', borderRadius: '50%', color: '#fff', fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' }, boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
            </ServiceComponent>
            <ServiceComponent heading='Bootcamps'>
              <FormatBoldIcon sx={{ padding: { xs: '.5rem', md: '1rem' }, backgroundColor: '#36C5AD', borderRadius: '50%', color: '#fff', fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' }, boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
            </ServiceComponent>
            <ServiceComponent heading='Hight Quality'>
              <HighQualityIcon sx={{ padding: { xs: '.5rem', md: '1rem' }, backgroundColor: '#CB4BF8', borderRadius: '50%', color: '#fff', fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' }, boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
            </ServiceComponent>
            <ServiceComponent heading='Get Certifcation'>
              <HomeRepairServiceIcon sx={{ padding: { xs: '.5rem', md: '1rem' }, backgroundColor: '#56E65B', borderRadius: '50%', color: '#fff', fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' }, boxShadow: '3px 3px 1rem #c2c2c2, -3px -3px 1rem #c2c2c2' }} />
            </ServiceComponent>
          </Grid>
        </Grid>
      </ Container>

      {/* Best Platform */}
      < SideToSideSection >
        <ImgWithTextSection
          componentsDirectionInMD='row-reverse'
          backgroundImage={{ md: 650, lg: 750 }}
          IMG={chartImageCroped}
        >
          <BusinessHintSection
            heading='Best Platform for the Technological Era'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
            showArrow={true}
          />
        </ImgWithTextSection>
      </ SideToSideSection>

      {/* platform overview */}
      < Container >
        <Grid container direction='column' justifyContent='center' alignItems='center' mt={10} mb={10}>
          <Grid container direction='column' justifyContent='center' alignItems='center' width='100%'>
            <Grid item xs={12} sm={8} md={3.5} >
              <Typography fontSize={{ xs: '1rem', md: '1.4rem', lg: '1.75rem' }} lineHeight='24px' color='#8F8F8F'>Advanced Customer Service Platform</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={3.5} >
              <Typography fontSize={{ xs: '25px', lg: '35px', xl: '58px' }} lineHeight={{ xs: '30px', lg: '68px' }} fontWeight='bold' color={theme.colors.textColor}>Platform Overview</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={3.5} sx={{ width: { xs: '100%', lg: '700px' } }}>
              <Typography fontSize={{ xs: '11px', md: '14px', lg: '18px' }} lineHeight={{ xs: '15px', lg: '24px' }} color={theme.colors.textColor2} >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} >
            <Carousel sx={{ width: '100%' }}
              indicatorContainerProps={{
                style: {
                  marginTop: '-20px'
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: theme.colors.deepOrange
                },
              }}
            >
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
      </ Container>


      {/* Best Platform 2*/}
      <SideToSideSection SideToSideSection >
        <ImgWithTextSection IMG={chartImage}>
          <BusinessHintSection
            heading='Best Platform for the Technological Era'
            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'
            showArrow={false}
          />
        </ImgWithTextSection>
      </SideToSideSection >;

      {/* Acceleration section */}
      < Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
        <Grid container justifyContent='center' alignItems='center' mb={5}
          direction={{ xs: 'column', md: 'row' }}
          gap={{ xs: 5, md: 2 }}
        >
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize={{ xs: '1.5rem', lg: '2rem' }} fontWeight='bold' color={theme.colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={{ xs: '12px', md: '14px' }} color={theme.colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet

              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' width={{ xs: '120px', md: '178px' }} />
            </Grid>

          </Grid>
          <Grid container item gap={1} xs={12} md={5} justifyContent='flex-start' alignItems='center' direction='row'>
            <Grid item container mr={{ sm: -7, md: 'initial' }} xs={3} justifyContent='flex-start' direction='column' alignItems='center' gap={1} pb={{ xs: 8, sm: 6, md: 8 }} width='30px'>
              <Grid item>
                <Box sx={{ padding: { xs: '0.5rem', lg: '1rem' }, backgroundColor: theme.colors.deepOrange, borderRadius: '50%', width: '1rem', height: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ color: '#fff', fontSize: { xs: '1rem', lg: '1.5rem' }, fontWeight: 'bold' }}> 1</Typography>
                </Box>
              </Grid>
              <Grid>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ height: { xs: '65px', sm: '70px', md: '90px', lg: '80px' }, width: '2px', backgroundColor: '#BCBCBC' }} />
              </Grid>
              <Grid item>
                <Box sx={{ padding: { xs: '0.5rem', lg: '1rem' }, backgroundColor: theme.colors.deepOrange, borderRadius: '50%', width: '1rem', height: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ color: '#fff', fontSize: { xs: '1rem', lg: '1.5rem' }, fontWeight: 'bold' }}> 1</Typography>
                </Box>
              </Grid>
              <Grid>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ height: { xs: '65px', sm: '70px', md: '90px', lg: '80px' }, width: '2px', backgroundColor: '#BCBCBC' }} />
              </Grid>
              <Grid item>
                <Box sx={{ padding: { xs: '0.5rem', lg: '1rem' }, backgroundColor: theme.colors.deepOrange, borderRadius: '50%', width: '1rem', height: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ color: '#fff', fontSize: { xs: '1rem', lg: '1.5rem' }, fontWeight: 'bold' }}> 1</Typography>
                </Box>
              </Grid>

            </Grid>
            <Grid item container xs={8} gap={6}>
              <Grid item container direction='column' alignItems='flex-start' justifyContent='center' gap={2} xs={12}>
                <Grid item >
                  <Typography fontSize={{ xs: '1rem', sm: '1.5rem' }} color={theme.colors.textColor}>
                    Market Research
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography fontSize={{ xs: '.6rem', sm: '.8rem' }} color={theme.colors.textColor2}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction='column' alignItems='flex-start' justifyContent='center' gap={2} xs={12}>
                <Grid item >
                  <Typography fontSize={{ xs: '1rem', sm: '1.5rem' }} color={theme.colors.textColor}>
                    Market Research
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography fontSize={{ xs: '.6rem', sm: '.8rem' }} color={theme.colors.textColor2}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction='column' alignItems='flex-start' justifyContent='center' gap={2} xs={12}>
                <Grid item >
                  <Typography fontSize={{ xs: '1rem', sm: '1.5rem' }} color={theme.colors.textColor}>
                    Market Research
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography fontSize={{ xs: '.6rem', sm: '.8rem' }} color={theme.colors.textColor2}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </ Container>;

      {/* caption section */}
      <Container Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
        <Grid container justifyContent='center' alignItems='center' mt={{ xs: 0, lg: 10 }} mb={{ xs: 0, lg: 10 }}>
          <Grid item xs={12} sm={8} md={3.5} >
            <Typography align="center" fontSize={{ xs: '1.5rem', md: '2rem', lg: '2.3rem' }} fontWeight='bold' color={theme.colors.textColor}>
              Don't Just Take our Word for it!
            </Typography>
          </Grid>
        </Grid>
      </Container>;

      {/* Counters Section */}
      <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
        <Grid container xs={12} justifyContent='center' alignItems='center' mt={10} mb={5}>
          {['Download', 'Active User', 'Positive Feedback', '+ rating'].map(item => (
            <React.Fragment key={item}><Counter item={item} /></React.Fragment>
          ))}
        </Grid>
      </Container>;

      {/* testimonials section */}
      <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
        <Grid container justifyContent='center' alignItems='center' mb={5}
          direction={{ xs: 'column', md: 'row' }}
          gap={2}
        >
          <Grid container item xs={12} md={5} mb={{ xs: 5, md: 'initial' }} justifyContent='center' alignItems='center'>
            <Carousel sx={{ width: '100%' }}
              activeIndicatorIconButtonProps={{
                style: {
                  color: theme.colors.deepOrange
                },
              }}
            >
              {testimonials.map((item) => (<React.Fragment key={item}><TestimonialCard item={item} /></React.Fragment>))}
            </Carousel>
          </Grid>
          <Grid container item gap={2} xs={12} md={5} justifyContent='flex-start' alignItems='center'>
            <Grid item>
              <Typography fontSize={{ xs: '1.5rem', lg: '2rem' }} fontWeight='bold' color={theme.colors.textColor}>
                Grow Your Business and Join Our Happy Users
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={{ xs: '12px', lg: '14' }} color={theme.colors.textColor2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent bgColor='linear-gradient(90deg, #e66465, #9198e5)' content='About us' textColor='#fff' width={{ xs: '120px', md: '178px' }} />
            </Grid>

          </Grid>
        </Grid>
      </Container>;

      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333333' }}>
        <Footer />
      </Box>
    </Box >
  );
};

export default Home;


// fontSize = {{ xs: '16px', md: '18', lg: '20', xl: '24px'; }}