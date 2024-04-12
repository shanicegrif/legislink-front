import React from "react";
import styled from "styled-components";

const PlaceholderContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  max-Width: 330px;
  margin-left: auto;
  margin-right: auto;
`;

const PlaceholderText = styled.p`
  font-size: 16px;
  color: #666;
`;

const BillSummaryPlaceholder = () => {
  return (
    <PlaceholderContainer>
      <PlaceholderText>Please select a bill to view its summary.</PlaceholderText>
    </PlaceholderContainer>
  );
};

export default BillSummaryPlaceholder;
