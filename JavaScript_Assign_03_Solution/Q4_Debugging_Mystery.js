 "use strict";

// Q4: Debugging Mystery — corrected version.
function showMessage() {
    // In strict mode, assigning to an undeclared identifier throws ReferenceError.
    // Declare the variable with const/let so its scope is explicit.
    const greeting = "Welcome";
    console.log(greeting); // Add a breakpoint here and watch greeting.
}

showMessage();

// VS Code debugger: Run and Debug -> create/select Node.js configuration -> set breakpoint.
// The Call Stack shows showMessage(), then the top-level script. Step Over/Into to observe flow.
