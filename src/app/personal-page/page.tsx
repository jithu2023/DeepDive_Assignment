'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  CircularProgress,
  Divider
} from '@mui/material';

export default function PersonalPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users
  if (status === 'unauthenticated') {
    router.push('/landing-page');
    return null;
  }

  // Show loading state
  if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress color="warning" />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#fff', p: 3 }}
    >
      <Card
        elevation={4}
        sx={{
          p: 4,
          minWidth: 320,
          maxWidth: 400,
          backgroundColor: '#fff',
          color: '#000',
          textAlign: 'center',
          borderRadius: 3,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Avatar
          src={session?.user?.image || '/placeholder.png'}
          alt={session?.user?.name || 'User Avatar'}
          sx={{
            width: 100,
            height: 100,
            mx: 'auto',
            mb: 2,
            border: '2px solid #FFD700', // Yellow border for emphasis
          }}
        />
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#FFD700' }}>
          Welcome, {session?.user?.name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {session?.user?.email}
        </Typography>

        <Divider sx={{ my: 2, backgroundColor: '#FFD700' }} />

        <Button
          variant="contained"
          onClick={() => signOut({ callbackUrl: '/landing-page' })}
          sx={{
            backgroundColor: '#FFD700',
            color: '#000',
            '&:hover': {
              backgroundColor: '#FFC107',
            },
            fontWeight: 'bold',
            padding: '10px 20px',
            textTransform: 'none', // Prevents uppercase text in the button
          }}
        >
          Sign Out
        </Button>
      </Card>
    </Box>
  );
}
