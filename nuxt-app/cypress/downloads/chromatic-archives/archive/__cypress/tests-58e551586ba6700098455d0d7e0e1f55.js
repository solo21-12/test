/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./cypress/e2e/regsiter_user.cy.js ***!
  \*****************************************/


/* ==== Test Created with Cypress Studio ==== */
it("register_user", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.wait(500);
  cy.document().toMatchImageSnapshot();
  cy.get("#join-us-button").should("be.visible").click();
  cy.document().toMatchImageSnapshot();
  cy.get(".input-field").clear("d");
  cy.get(".input-field").type("test@gmail.com");
  cy.get("#submit-button > .gradient").click();
  cy.document().toMatchImageSnapshot();
  cy.get(".flex-col > .gap-2 > .flex").click();
  cy.get('[data-testid="name-input"] > .input-field').type("test");
  cy.get('[data-testid="surname-input"] > .input-field').type("user");
  cy.get('[data-testid="password-input"] > .input-field').type("password");
  cy.get('[data-testid="confirm-password-input"] > .input-field').type("password");
  cy.get("#submit-button > .gradient").click();
  cy.document().toMatchImageSnapshot();
  cy.get('[data-testid="code-input-0"]').clear("1");
  cy.get('[data-testid="code-input-0"]').type("1");
  cy.get('[data-testid="code-input-1"]').clear("2");
  cy.get('[data-testid="code-input-1"]').type("2");
  cy.get('[data-testid="code-input-2"]').clear("3");
  cy.get('[data-testid="code-input-2"]').type("3");
  cy.get('[data-testid="code-input-3"]').clear("4");
  cy.get('[data-testid="code-input-3"]').type("4");
  cy.get('[data-testid="code-input-4"]').clear("5");
  cy.get('[data-testid="code-input-4"]').type("5");
  cy.get('[data-testid="code-input-5"]').clear("6");
  cy.get('[data-testid="code-input-5"]').type("6");
  cy.get("#submit-button").click();
  cy.document().toMatchImageSnapshot();
  /* ==== End Cypress Studio ==== */
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnc2l0ZXJfdXNlci5jeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0FBLEVBQUUsQ0FBQyxlQUFlLEVBQUUsWUFBVztFQUM3QjtFQUNBQyxFQUFFLENBQUNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztFQUNsQ0QsRUFBRSxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ1pGLEVBQUUsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQ0Msb0JBQW9CLENBQUMsQ0FBQztFQUVwQ0osRUFBRSxDQUFDSyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FDdEJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FDcEJDLEtBQUssQ0FBQyxDQUFDO0VBQ1ZQLEVBQUUsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQ0Msb0JBQW9CLENBQUMsQ0FBQztFQUVwQ0osRUFBRSxDQUFDSyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDakNSLEVBQUUsQ0FBQ0ssR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7RUFDN0NULEVBQUUsQ0FBQ0ssR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBQzVDUCxFQUFFLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUNDLG9CQUFvQixDQUFDLENBQUM7RUFFcENKLEVBQUUsQ0FBQ0ssR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBQzVDUCxFQUFFLENBQUNLLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ2hFVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDO0VBQ25FVCxFQUFFLENBQUNLLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQ3hFVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDSSxJQUFJLENBQ2xFLFVBQ0YsQ0FBQztFQUNEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUM1Q1AsRUFBRSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxvQkFBb0IsQ0FBQyxDQUFDO0VBQ3BDSixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pEUixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pEUixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pEUixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pEUixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pEUixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ2pEUixFQUFFLENBQUNLLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2hEVCxFQUFFLENBQUNLLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUNoQ1AsRUFBRSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxvQkFBb0IsQ0FBQyxDQUFDO0VBQ3BDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXh0LWFwcC8uL2N5cHJlc3MvZTJlL3JlZ3NpdGVyX3VzZXIuY3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PSBUZXN0IENyZWF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG5pdChcInJlZ2lzdGVyX3VzZXJcIiwgZnVuY3Rpb24oKSB7XG4gIC8qID09PT0gR2VuZXJhdGVkIHdpdGggQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuICBjeS52aXNpdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIik7XG4gIGN5LndhaXQoNTAwKTtcbiAgY3kuZG9jdW1lbnQoKS50b01hdGNoSW1hZ2VTbmFwc2hvdCgpO1xuXG4gIGN5LmdldChcIiNqb2luLXVzLWJ1dHRvblwiKVxuICAgIC5zaG91bGQoXCJiZS52aXNpYmxlXCIpXG4gICAgLmNsaWNrKCk7XG4gIGN5LmRvY3VtZW50KCkudG9NYXRjaEltYWdlU25hcHNob3QoKTtcblxuICBjeS5nZXQoXCIuaW5wdXQtZmllbGRcIikuY2xlYXIoXCJkXCIpO1xuICBjeS5nZXQoXCIuaW5wdXQtZmllbGRcIikudHlwZShcInRlc3RAZ21haWwuY29tXCIpO1xuICBjeS5nZXQoXCIjc3VibWl0LWJ1dHRvbiA+IC5ncmFkaWVudFwiKS5jbGljaygpO1xuICBjeS5kb2N1bWVudCgpLnRvTWF0Y2hJbWFnZVNuYXBzaG90KCk7XG5cbiAgY3kuZ2V0KFwiLmZsZXgtY29sID4gLmdhcC0yID4gLmZsZXhcIikuY2xpY2soKTtcbiAgY3kuZ2V0KCdbZGF0YS10ZXN0aWQ9XCJuYW1lLWlucHV0XCJdID4gLmlucHV0LWZpZWxkJykudHlwZShcInRlc3RcIik7XG4gIGN5LmdldCgnW2RhdGEtdGVzdGlkPVwic3VybmFtZS1pbnB1dFwiXSA+IC5pbnB1dC1maWVsZCcpLnR5cGUoXCJ1c2VyXCIpO1xuICBjeS5nZXQoJ1tkYXRhLXRlc3RpZD1cInBhc3N3b3JkLWlucHV0XCJdID4gLmlucHV0LWZpZWxkJykudHlwZShcInBhc3N3b3JkXCIpO1xuICBjeS5nZXQoJ1tkYXRhLXRlc3RpZD1cImNvbmZpcm0tcGFzc3dvcmQtaW5wdXRcIl0gPiAuaW5wdXQtZmllbGQnKS50eXBlKFxuICAgIFwicGFzc3dvcmRcIlxuICApO1xuICBjeS5nZXQoXCIjc3VibWl0LWJ1dHRvbiA+IC5ncmFkaWVudFwiKS5jbGljaygpO1xuICBjeS5kb2N1bWVudCgpLnRvTWF0Y2hJbWFnZVNuYXBzaG90KCk7XG4gIGN5LmdldCgnW2RhdGEtdGVzdGlkPVwiY29kZS1pbnB1dC0wXCJdJykuY2xlYXIoXCIxXCIpO1xuICBjeS5nZXQoJ1tkYXRhLXRlc3RpZD1cImNvZGUtaW5wdXQtMFwiXScpLnR5cGUoXCIxXCIpO1xuICBjeS5nZXQoJ1tkYXRhLXRlc3RpZD1cImNvZGUtaW5wdXQtMVwiXScpLmNsZWFyKFwiMlwiKTtcbiAgY3kuZ2V0KCdbZGF0YS10ZXN0aWQ9XCJjb2RlLWlucHV0LTFcIl0nKS50eXBlKFwiMlwiKTtcbiAgY3kuZ2V0KCdbZGF0YS10ZXN0aWQ9XCJjb2RlLWlucHV0LTJcIl0nKS5jbGVhcihcIjNcIik7XG4gIGN5LmdldCgnW2RhdGEtdGVzdGlkPVwiY29kZS1pbnB1dC0yXCJdJykudHlwZShcIjNcIik7XG4gIGN5LmdldCgnW2RhdGEtdGVzdGlkPVwiY29kZS1pbnB1dC0zXCJdJykuY2xlYXIoXCI0XCIpO1xuICBjeS5nZXQoJ1tkYXRhLXRlc3RpZD1cImNvZGUtaW5wdXQtM1wiXScpLnR5cGUoXCI0XCIpO1xuICBjeS5nZXQoJ1tkYXRhLXRlc3RpZD1cImNvZGUtaW5wdXQtNFwiXScpLmNsZWFyKFwiNVwiKTtcbiAgY3kuZ2V0KCdbZGF0YS10ZXN0aWQ9XCJjb2RlLWlucHV0LTRcIl0nKS50eXBlKFwiNVwiKTtcbiAgY3kuZ2V0KCdbZGF0YS10ZXN0aWQ9XCJjb2RlLWlucHV0LTVcIl0nKS5jbGVhcihcIjZcIik7XG4gIGN5LmdldCgnW2RhdGEtdGVzdGlkPVwiY29kZS1pbnB1dC01XCJdJykudHlwZShcIjZcIik7XG4gIGN5LmdldChcIiNzdWJtaXQtYnV0dG9uXCIpLmNsaWNrKCk7XG4gIGN5LmRvY3VtZW50KCkudG9NYXRjaEltYWdlU25hcHNob3QoKTtcbiAgLyogPT09PSBFbmQgQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xufSk7XG4iXSwibmFtZXMiOlsiaXQiLCJjeSIsInZpc2l0Iiwid2FpdCIsImRvY3VtZW50IiwidG9NYXRjaEltYWdlU25hcHNob3QiLCJnZXQiLCJzaG91bGQiLCJjbGljayIsImNsZWFyIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=