"use client";

import { Button } from "@/components/ui/button";
import { InputData } from "./components/Input";
import Heading from "./components/Heading";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const [mainValue, setMainValu] = useState([{}]);

  // const [checkIn, setCheckIn] = useState([
  //   {
  //     adminId: "",
  //     products: "",
  //     usage: "",
  //     reason: "",
  //     description: "",
  //     insideNumber: [{}],
  //   },
  // ]);

  const [completeProduct, setCompleteProduct] = useState([{}]);

  const [ssno, setSsno] = useState([{}]);

  const [adminId, setAdminId] = useState("");

  const [products, setProducts] = useState("");
  const [productsQuantity, setProductsQuantity] = useState();

  const [usage, setUsage] = useState("");
  const [reason, setReason] = useState("");

  const [description, setDescription] = useState("");

  const handleClick = () => {
    const data = {
      adminId,
      products,
      usage,
      reason,
      description,
      insideNumber: [{}],
    };

    // setCheckIn([...checkIn, { ...data }]);
  };
  // if(!productsQuantity)setProductsQuantity(productsQuantity - 1)

  let serialNumber = Array.from({ length: Number(productsQuantity) });

  const [tempNumber, setTempNumber] = useState({});

  // const onFieldInput = (i: any) => {
  //   serialNumber = serialNumber.map((value, index) => {
  //     if (index === i) {
  //       return tempNumber;
  //     } else {
  //       return value;
  //     }
  //   });
  //   setTempNumber(undefined);
  //   const mergeProducts = checkIn.map((m) => ({ ...m, serialNumber }));
  //   console.log("mergeProducts: ", mergeProducts);
  // };
  // console.log("CHECKIN: ", checkIn);

  const onFieldInput = (i: any) => {};
  console.log("SSNO: ", ssno);
  const [tempValue, setTempValue] = useState();
  return (
    <>
      {JSON.stringify(serialNumber)}
      {JSON.stringify(ssno)}

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
              {serialNumber.map((key, index) => (
                <TableRow>
                  <TableCell>{index}</TableCell>
                  <TableCell>
                    <input
                      type="text"
                      className="border rounded h-7"
                      placeholder="Type..."
                      // onChange={(e: any) => setCheckIn([...tempNumber, serialNumber: e.target.value])}
                      // onChange={(e: any) =>
                      //   setCheckIn(
                      //     checkIn.map((value, i) => {
                      //       value.insideNumber.map((v, i) => {});
                      //       return index === i ? e.target.value : value;
                      //     })
                      //   )
                      // }

                      onChange={(e: any) =>
                        setSsno(
                          ssno.map((value, i) =>
                            i === index ? e.target.value : value
                          )
                        )
                      }
                    />
                    <button onClick={() => onFieldInput(index)}>Update</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
