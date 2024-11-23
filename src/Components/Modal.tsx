import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface ModalPropsType {
  handleOpen: () => void;
  open: boolean;
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  } | null;
}

export function Modal({ handleOpen, open, product }: ModalPropsType) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{product?.name ?? "Product Details"}</DialogHeader>
      <DialogBody>
        <div className="flex flex-col items-center gap-4">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-40 h-40 object-cover rounded-md"
          />
          <p className="text-gray-600 text-center">
            Price: ${product?.price.toFixed(2)}
          </p>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-2"
        >
          Cancel
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          Confirm Purchase
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
