<?php

namespace App\Exports;

use App\Order;
use App\Models\Inspection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\BeforeWriting;
use Maatwebsite\Excel\Files\LocalTemporaryFile;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Events\AfterSheet;
// use Sheet macro maat excel
use Maatwebsite\Excel\Sheet;

class ResultExport implements WithEvents,ShouldAutoSize
{
    protected $data;


    public function __construct($data)
    {
        $this->data = $data;
    }

    public function registerEvents(): array
    {
        Sheet::macro('setOrientation', function (Sheet $sheet, $orientation) {
            $sheet->getDelegate()->getPageSetup()->setOrientation($orientation);
            $sheet->getDelegate()->getPageSetup()->setFitToPage(true);
            $sheet->getDelegate()->getPageSetup()->setPaperSize(50);
            $sheet->getDelegate()->getPageSetup()->setFitToPage(true);
            $sheet->getDelegate()->getPageSetup()->setHorizontalCentered(true);
            $sheet->getDelegate()->getPageSetup()->setVerticalCentered(true);
            // dd($sheet->getDelegate()->getPageSetup());
        });
        return [
            BeforeWriting::class => function(BeforeWriting $event) {
                $templateFile = new LocalTemporaryFile(public_path('storage/base.xlsm'));
                $event->writer->reopen($templateFile, Excel::XLSX);

                $sheet = $event->writer->getSheetByIndex(0);

                $this->populateSheet($sheet);

                $event->writer->getSheetByIndex(0)->export($event->getConcernable()); // call the export on the first sheet

                return $event->getWriter()->getSheetByIndex(0);
            },
            AfterSheet::class    => function(AfterSheet $event) {
                $event->sheet->setOrientation(\PhpOffice\PhpSpreadsheet\Worksheet\PageSetup::ORIENTATION_LANDSCAPE);
            },


        ];
    }
    private function populateSheet($sheet){
        // Populate the static cells
        $fee_rate = $this->data['fee_rate'] / 100;
        $basis_coins_on_hand = $this->data['basis_coins_on_hand'];
        $coins_on_hand = $this->data['coins_on_hand'];
        $percentage_coins_to_sell = $this->data['percentage_coins_to_sell'] / 100;

        $selling_price_target                       = isset($this->data['selling_price_target']) ? $this->data['selling_price_target'] : '';
        $net_proceeds_bank_target                   = isset($this->data['net_proceeds_bank_target']) ? $this->data['net_proceeds_bank_target'] : '';
        $net_proceeds_percentage_ratio_target       = isset($this->data['net_proceeds_percentage_ratio_target']) ? $this->data['net_proceeds_percentage_ratio_target'] : '';
        $net_profit_loss_target                     = isset($this->data['net_profit_loss_target']) ? $this->data['net_profit_loss_target'] : '';
        $net_profit_loss_percentage_ratio_target    = isset($this->data['net_profit_loss_percentage_ratio_target']) ? $this->data['net_profit_loss_percentage_ratio_target'] : '';


        $selling_price_result                       = isset($this->data['selling_price_result'])? $this->data['selling_price_result'] : [];
        $net_proceeds_bank_result                   = isset($this->data['net_proceeds_bank_result'])? $this->data['net_proceeds_bank_result'] : [];
        $net_proceeds_percentage_result             = isset($this->data['net_proceeds_percentage_result'])? $this->data['net_proceeds_percentage_result'] : [];

        $net_profit_loss_result                     = isset($this->data['net_profit_loss_result'])? $this->data['net_profit_loss_result'] : [];
        $net_profit_loss_percentage_result          = isset($this->data['net_profit_loss_percentage_result'])? $this->data['net_profit_loss_percentage_result'] : [];

        $sheet->setCellValue('D14', $fee_rate);
        $sheet->setCellValue('E14', $basis_coins_on_hand);
        $sheet->setCellValue('F14', $coins_on_hand);
        $sheet->setCellValue('G14', $percentage_coins_to_sell);
        if(count($selling_price_result) > 0){
        $sheet->setCellValue('B14', $selling_price_target);
        $sheet->setCellValue('H14', $selling_price_result['coin_sell']);
        $sheet->setCellValue('I14', $selling_price_result['selling_price_per_coin']);
        $sheet->setCellValue('J14', $selling_price_result['net_proceeds_bank']);
        $sheet->setCellValue('K14', $selling_price_result['net_profit_loss']);
        $sheet->setCellValue('L14', $selling_price_result['gross_proceeds']);
        $sheet->setCellValue('M14', $selling_price_result['variable_selling_fee']);
        $sheet->setCellValue('N14', $selling_price_result['net_proceeds_percentage_ratio'] / 100);
        $sheet->setCellValue('O14', $selling_price_result['net_profit_loss_percentage_ratio'] / 100);
        $sheet->setCellValue('P14', $selling_price_result['gain_exclude_selling']);
        $sheet->setCellValue('Q14', $selling_price_result['basis_after_sale']);
        $sheet->setCellValue('R14', $selling_price_result['coins_after_sale']);
        }
        if(count($net_proceeds_bank_result) > 0){
            $sheet->setCellValue('B18', $net_proceeds_bank_target);

            $sheet->setCellValue('D18', $fee_rate);
            $sheet->setCellValue('E18', $basis_coins_on_hand);
            $sheet->setCellValue('F18', $coins_on_hand);
            $sheet->setCellValue('G18', $percentage_coins_to_sell);

            $sheet->setCellValue('H18', $net_proceeds_bank_result['coin_sell']);
            $sheet->setCellValue('I18', $net_proceeds_bank_result['selling_price_per_coin']);
            $sheet->setCellValue('J18', $net_proceeds_bank_result['net_proceeds_bank']);
            $sheet->setCellValue('K18', $net_proceeds_bank_result['net_profit_loss']);
            $sheet->setCellValue('L18', $net_proceeds_bank_result['gross_proceeds']);
            $sheet->setCellValue('M18', $net_proceeds_bank_result['variable_selling_fee']);
            $sheet->setCellValue('N18', $net_proceeds_bank_result['net_proceeds_percentage_ratio'] / 100);
            $sheet->setCellValue('O18', $net_proceeds_bank_result['net_profit_loss_percentage_ratio'] / 100);
            $sheet->setCellValue('P18', $net_proceeds_bank_result['gain_exclude_selling']);
            $sheet->setCellValue('Q18', $net_proceeds_bank_result['basis_after_sale']);
            $sheet->setCellValue('R18', $net_proceeds_bank_result['coins_after_sale']);
        }

        if(count($net_proceeds_percentage_result) > 0){
            $sheet->setCellValue('B22', $net_proceeds_percentage_ratio_target);

            $sheet->setCellValue('D22', $fee_rate);
            $sheet->setCellValue('E22', $basis_coins_on_hand);
            $sheet->setCellValue('F22', $coins_on_hand);
            $sheet->setCellValue('G22', $percentage_coins_to_sell);

            $sheet->setCellValue('H22', $net_proceeds_percentage_result['coin_sell']);
            $sheet->setCellValue('I22', $net_proceeds_percentage_result['selling_price_per_coin']);
            $sheet->setCellValue('J22', $net_proceeds_percentage_result['net_proceeds_bank']);
            $sheet->setCellValue('K22', $net_proceeds_percentage_result['net_profit_loss']);
            $sheet->setCellValue('L22', $net_proceeds_percentage_result['gross_proceeds']);
            $sheet->setCellValue('M22', $net_proceeds_percentage_result['variable_selling_fee']);
            $sheet->setCellValue('N22', $net_proceeds_percentage_result['net_proceeds_percentage_ratio'] / 100);
            $sheet->setCellValue('O22', $net_proceeds_percentage_result['net_profit_loss_percentage_ratio'] / 100);
            $sheet->setCellValue('P22', $net_proceeds_percentage_result['gain_exclude_selling']);
            $sheet->setCellValue('Q22', $net_proceeds_percentage_result['basis_after_sale']);
            $sheet->setCellValue('R22', $net_proceeds_percentage_result['coins_after_sale']);
        }

        if(count($net_profit_loss_result) > 0){
            $sheet->setCellValue('B26', $net_profit_loss_target);

            $sheet->setCellValue('D26', $fee_rate);
            $sheet->setCellValue('E26', $basis_coins_on_hand);
            $sheet->setCellValue('F26', $coins_on_hand);
            $sheet->setCellValue('G26', $percentage_coins_to_sell);

            $sheet->setCellValue('H26', $net_profit_loss_result['coin_sell']);
            $sheet->setCellValue('I26', $net_profit_loss_result['selling_price_per_coin']);
            $sheet->setCellValue('J26', $net_profit_loss_result['net_proceeds_bank']);
            $sheet->setCellValue('K26', $net_profit_loss_result['net_profit_loss']);
            $sheet->setCellValue('L26', $net_profit_loss_result['gross_proceeds']);
            $sheet->setCellValue('M26', $net_profit_loss_result['variable_selling_fee']);
            $sheet->setCellValue('N26', $net_profit_loss_result['net_proceeds_percentage_ratio'] / 100);
            $sheet->setCellValue('O26', $net_profit_loss_result['net_profit_loss_percentage_ratio'] / 100);
            $sheet->setCellValue('P26', $net_profit_loss_result['gain_exclude_selling']);
            $sheet->setCellValue('Q26', $net_profit_loss_result['basis_after_sale']);
            $sheet->setCellValue('R26', $net_profit_loss_result['coins_after_sale']);
        }

        if(count($net_profit_loss_percentage_result) > 0){
            $sheet->setCellValue('B30', $net_profit_loss_percentage_ratio_target);

            $sheet->setCellValue('D30', $fee_rate);
            $sheet->setCellValue('E30', $basis_coins_on_hand);
            $sheet->setCellValue('F30', $coins_on_hand);
            $sheet->setCellValue('G30', $percentage_coins_to_sell);

            $sheet->setCellValue('H30', $net_profit_loss_percentage_result['coin_sell']);
            $sheet->setCellValue('I30', $net_profit_loss_percentage_result['selling_price_per_coin']);
            $sheet->setCellValue('J30', $net_profit_loss_percentage_result['net_proceeds_bank']);
            $sheet->setCellValue('K30', $net_profit_loss_percentage_result['net_profit_loss']);
            $sheet->setCellValue('L30', $net_profit_loss_percentage_result['gross_proceeds']);
            $sheet->setCellValue('M30', $net_profit_loss_percentage_result['variable_selling_fee']);
            $sheet->setCellValue('N30', $net_profit_loss_percentage_result['net_proceeds_percentage_ratio'] / 100);
            $sheet->setCellValue('O30', $net_profit_loss_percentage_result['net_profit_loss_percentage_ratio'] / 100);
            $sheet->setCellValue('P30', $net_profit_loss_percentage_result['gain_exclude_selling']);
            $sheet->setCellValue('Q30', $net_profit_loss_percentage_result['basis_after_sale']);
            $sheet->setCellValue('R30', $net_profit_loss_percentage_result['coins_after_sale']);
        }
    }
}
