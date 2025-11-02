import {render, getMockContextProps} from "@stripe/ui-extension-sdk/testing";
import {OnboardingView} from "@stripe/ui-extension-sdk/ui";

import AppOnboarding from "./AppOnboarding";

describe("AppOnboarding", () => {
  it("renders OnboardingView", () => {
    const {wrapper} = render(<AppOnboarding {...getMockContextProps()} />);

    expect(wrapper).toContainComponent(OnboardingView);
  });
});
