import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import EditAssetPopup from "./AssetEdit"; // Import the Edit popup
import DeleteAssetPopup from "./AssetDelete"; // Import the Delete popup

function AssetTable({ assets, handleEditOpen, handleDeleteOpen, editOpen, deleteOpen, selectedAsset, handleUpdateAsset, handleDeleteAsset }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Asset Name</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Quantity</strong></TableCell>
            <TableCell><strong>Condition</strong></TableCell>
            <TableCell><strong>Location</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.length > 0 ? (
            assets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.category}</TableCell>
                <TableCell>{asset.quantity}</TableCell>
                <TableCell>{asset.condition}</TableCell>
                <TableCell>{asset.location}</TableCell>
                <TableCell>
                  <Button color="primary" variant="outlined" onClick={() => handleEditOpen(asset)}>
                    Edit <Edit />
                  </Button>
                  <Button color="error" variant="outlined" onClick={() => handleDeleteOpen(asset)}>
                    Delete <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No assets found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {/* Edit and Delete Popups */}
      {selectedAsset && (
        <>
          <EditAssetPopup
            open={editOpen}
            asset={selectedAsset}
            onClose={() => handleEditOpen(null)}
            onUpdate={handleUpdateAsset}
          />
          <DeleteAssetPopup
            open={deleteOpen}
            asset={selectedAsset}
            onClose={() => handleDeleteOpen(null)}
            onDelete={handleDeleteAsset}
          />
        </>
      )}
    </TableContainer>
  );
}

export default AssetTable;
