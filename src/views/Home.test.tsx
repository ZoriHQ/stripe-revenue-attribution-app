import { render, getMockContextProps } from "@stripe/ui-extension-sdk/testing";
import { ContextView } from "@stripe/ui-extension-sdk/ui";

import Home from "./Home";

describe("DashboardHomepageView", () => {
  it("renders ContextView with connection message", () => {
    const { wrapper } = render(<Home {...getMockContextProps()} />);

    expect(wrapper.find(ContextView)).toContainText("Connected to Zori");
  });
});
