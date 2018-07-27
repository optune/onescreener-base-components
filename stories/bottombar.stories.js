import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { BottomBar, Button, ButtonContainer } from "../src/index";

storiesOf("Molecule/Bottombar/plain", module)
  .add("Bottombar with text", () => <BottomBar>Text 1 2 3</BottomBar>)
  .add("Bottombar with 1 button", () => (
    <BottomBar>
      <Button>Next</Button>
    </BottomBar>
  ))
  .add("Bottombar with 2 buttons", () => (
    <BottomBar>
      <Button secondary>Previous</Button>
      <Button>Next</Button>
    </BottomBar>
  ))
  .add("Bottombar with 3 buttons", () => (
    <BottomBar>
      <Button secondary>Previous</Button>
      <Button>Next</Button>
      <Button>Preview</Button>
    </BottomBar>
  ));

storiesOf("Molecule/Bottombar/withButtonContainers", module)
  .add("Bottombar with text", () => (
    <BottomBar>
      <ButtonContainer>Text 1 2 3</ButtonContainer>
    </BottomBar>
  ))
  .add("Bottombar with 1 button", () => (
    <BottomBar>
      <ButtonContainer>
        <Button>Next</Button>
      </ButtonContainer>
    </BottomBar>
  ))
  .add("Bottombar with 2 buttons", () => (
    <BottomBar>
      <ButtonContainer>
        <Button secondary>Previous</Button>
        <Button>Next</Button>
      </ButtonContainer>
    </BottomBar>
  ))
  .add("Bottombar with 3 buttons", () => (
    <BottomBar>
      <ButtonContainer>
        <Button secondary>Previous</Button>
        <Button>Next</Button>
        <Button>Preview</Button>
      </ButtonContainer>
    </BottomBar>
  ));
