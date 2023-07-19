import React, { Component } from 'react';

import { CustomError } from '@utils/index';

interface ErrorBoundaryState {
  hasError: boolean;
  error: CustomError | null;
}

interface ErrorBoundaryProps {
  AuthorizationErrorFallback: React.ComponentType<{ resetErrorBoundary: () => void }>;
  ServerErrorFallback: React.ComponentType<{ resetErrorBoundary: () => void }>;
  UnknownErrorFallback: React.ComponentType<{ resetErrorBoundary: () => void }>;
  children?: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private INIT_ERROR_STATE = { hasError: false, error: null };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = this.INIT_ERROR_STATE;
  }

  resetErrorBoundary = () => {
    this.setState(this.INIT_ERROR_STATE);
  };

  static getDerivedStateFromError(error: CustomError) {
    return { hasError: true, error };
  }

  componentDidCatch(error: CustomError) {
    console.error('Uncaught error:', error);
  }

  render() {
    const { hasError, error } = this.state;

    if (!hasError) {
      return this.props.children;
    }
    if (!error) return;

    const { code } = error;
    const { AuthorizationErrorFallback, ServerErrorFallback, UnknownErrorFallback } = this.props;

    if (code === 401) {
      return <AuthorizationErrorFallback resetErrorBoundary={this.resetErrorBoundary} />;
    }
    if (code === 500) {
      return <ServerErrorFallback resetErrorBoundary={this.resetErrorBoundary} />;
    }

    return <UnknownErrorFallback resetErrorBoundary={this.resetErrorBoundary} />;
  }
}

export default ErrorBoundary;
