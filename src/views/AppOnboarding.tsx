import React from 'react';
import {
  FormFieldGroup,
  TextField,
  OnboardingView,
  TaskListItemProps,
} from '@stripe/ui-extension-sdk/ui';
import {ExtensionContextValue} from '@stripe/ui-extension-sdk/context';

/**
 * Use OnboardingView to implement an onboarding flow for your Stripe App.
 * OnboardingView is available in version 9.x+ of @stripe/ui-extension-sdk.
 * @see https://docs.stripe.com/stripe-apps/components/onboardingview
 */
export default function AppOnboarding(context: ExtensionContextValue) {
  const tasks: TaskListItemProps[] = [
    {title: 'Grant permissions to ZoriHQ', status: 'complete'},
    {title: 'Connect to Stripe account', status: 'complete'}
  ];

  /**
   * OnboardingView should be used as the root element when implementing a view
   * for the onboarding viewport. The Stripe Apps runtime performs validation
   * check and may throw an error in development if this requirement is not met.
   */
  return (
    <>
      <OnboardingView
        title={'Welcome to ZoriHQ'}
        description={'Your revenue attribution platform is ready to track and analyze your Stripe revenue data.'}
        error={null}
        pending={false}
        completed={true}
        tasks={tasks}
      >
        <FormFieldGroup
          legend="Setup Complete"
          description="ZoriHQ is now connected to your Stripe account and ready to track revenue attribution."
        >
        </FormFieldGroup>
      </OnboardingView>
    </>
  );
}