'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, Typography, Box } from '@mui/material';
import { signIn } from 'next-auth/react';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/personal-page');
    }
  }, [status, router]);

  const images = [
    '/carousel/1.png',
    '/carousel/2.png',
    '/carousel/3.png',
    '/carousel/4.png',
    '/carousel/5.png',
    '/carousel/6.png',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-around', // <-- updated here
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: 10,
      gap: 4,
    }}
  >
  
      {/* Div1: Text and Sign In */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
          color: '#000',
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 700, color: '#000' }}
        >
          Welcome to <span style={{ color: '#FFD700' }}>DeepDive</span>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: '#444' }}
        >
          Please sign in with Google to continue
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => signIn('google')}
          sx={{
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            textTransform: 'none',
            mt: 3,
            '&:hover': {
              backgroundColor: '#e6c200',
            },
          }}
        >
          Sign in with Google
        </Button>
      </Box>

      {/* Div2: Image Carousel */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 500,
          borderRadius: 2,
          overflow: 'hidden',
          padding: 5
        }}
      >
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                width={500}
                height={350}
                alt={`Slide ${index + 1}`}
                style={{
                  borderRadius: '10px',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
