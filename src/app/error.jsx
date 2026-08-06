"use client";

import React, { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Check if it is a chunk load error or network issue loading a dynamic chunk
    const errorMessage = error?.message?.toLowerCase() || '';
    const isChunkError = 
      errorMessage.includes('loading chunk') || 
      errorMessage.includes('chunkloaderror') || 
      errorMessage.includes('failed to fetch') || 
      errorMessage.includes('loading-chunk-failed');
    
    if (isChunkError) {
      // Automatically reload the page to get the latest client-side assets
      window.location.reload();
    }
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '20px',
      color: '#fff',
      background: '#000'
    }}>
      <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Something went wrong!</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '25px', maxWidth: '500px' }}>
        The page encountered a loading issue. Please try reloading.
      </p>
      <button 
        onClick={() => reset()}
        style={{
          padding: '12px 30px',
          background: 'linear-gradient(135deg, #e007b4 0%, #760b93 100%)',
          border: 'none',
          borderRadius: '50px',
          color: '#fff',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
