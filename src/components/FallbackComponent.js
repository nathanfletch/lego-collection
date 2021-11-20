import React from "react";

export default function FallbackComponent({ error }) {
  return <div>Something went wrong: {error.message}</div>;
}
