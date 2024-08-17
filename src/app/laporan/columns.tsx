"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Flora = {
  nama_latin: string;
  nama_local: string;
  iucn: string;
  cites: string;
  p: string;
};

export type Konservasi = {
  jenis: string;
  nama_latin: string;
  iucn: string;
  cites: string;
  p: string;
  famili: string;
};

export const columns: ColumnDef<Flora>[] = [
  {
    accessorKey: "nama_latin",
    header: "Nama Latin",
  },
  {
    accessorKey: "nama_local",
    header: "Nama Lokal",
  },
  {
    accessorKey: "iucn",
    header: "IUCN",
  },
  {
    accessorKey: "cites",
    header: "CITES",
  },
  {
    accessorKey: "p",
    header: "P.106",
  },
];

export const columnKonservasi: ColumnDef<Konservasi>[] = [
  {
    accessorKey: "jenis",
    header: "Jenis",
  },
  {
    accessorKey: "iucn",
    header: "IUCN",
  },
  {
    accessorKey: "cites",
    header: "CITES",
  },
  {
    accessorKey: "p",
    header: "P.106",
  },
  {
    accessorKey: "famili",
    header: "Famili",
  },
  {
    accessorKey: "nama_latin",
    header: "Nama Latin",
  },
];
