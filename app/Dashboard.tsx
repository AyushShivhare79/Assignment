"use client";

import { Button } from "@/components/ui/button";
import { InputData } from "./components/Input";
import Heading from "./components/Heading";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
// import Table from "./components/Table";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const [chechIn, setCheckIn] = useState([
    {
      adminId: "",
      products: "",
      usage: "",
      reason: "",
      description: "",
    },
  ]);

  const [adminId, setAdminId] = useState("");

  const [products, setProducts] = useState("");
  const [productsQuantity, setProductsQuantity] = useState(0);

  const [usage, setUsage] = useState("");
  const [reason, setReason] = useState("");

  // const [products, setProducts] = useState({
  //   products: "",
  //   quantity: "",
  // });
  // const [usage, setUsage] = useState({
  //   usage: "",
  //   quantity: "",
  // });

  const [description, setDescription] = useState("");

  const handleClick = () => {
    const data = new Array(productsQuantity).fill({
      adminId,
      products,
      usage,
      reason,
      description,
    });
    setCheckIn([...chechIn, ...data]);
  };
  return (
    <>
      {JSON.stringify(adminId)}
      {JSON.stringify(products)}
      {JSON.stringify(productsQuantity)}
      {JSON.stringify(usage)}
      {JSON.stringify(reason)}
      {JSON.stringify(description)}

      {JSON.stringify(chechIn)}

      <div className="flex px-14 pt-5 border">
        <div className="w-3/5 border">
          <div className="flex flex-col gap-5">
            <Heading />
            <InputData
              type={"string"}
              label={"Admin/ ID"}
              onChange={(e: any) => setAdminId(e.target.value)}
            />

            {/* Issue hai yaha */}

            <div className="flex items-center gap-5">
              <Select
                label={"Products"}
                onChange={(e: any) => setProducts(e)}
              />
              <InputData
                type={"number"}
                label={"Quantity"}
                onChange={(e: any) => setProductsQuantity(e.target.value)}
              />
              <Button onClick={handleClick}>Serial number</Button>
            </div>

            <div className="flex justify-center items-center hover:cursor-pointer bg-blue-500 text-white h-7 text-sm rounded-3xl w-20">
              Add new
            </div>

            {/* Issue hai yaha */}

            <div className="flex items-center gap-5">
              <InputData
                type={"text"}
                label={"Usage"}
                onChange={(e: any) => setUsage(e.target.value)}
              />
              <Select label={"Reason"} onChange={(e: any) => setReason(e)} />
            </div>

            <div className="pt-5">
              <TextArea
                label="Description"
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" w-2/5   border">
          <div>Serial number of </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Checkbox</TableHead>
                <TableHead>#</TableHead>
                <TableHead>SERIAL NUMBER</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {}

                <TableCell></TableCell>

                {/* <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};
export function TableComp() {
  return (
    <>
      <div></div>
    </>
  );
}

export default Dashboard;
