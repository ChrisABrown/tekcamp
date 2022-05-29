import React from "react";

export default function CheckError(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw Error(`an error occurred, Err:  ${response.status}`);
  }
}
