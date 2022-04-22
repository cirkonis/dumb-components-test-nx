import { Component, Input, OnInit } from '@angular/core';
import { ITDSColumnObject } from '../../../../../interfaces/src/lib/table-data-source/ITDSCellObject.interface';
import { ETDSValueTypes } from '../../../../../enums/src/lib/table-data-source/ETDSValueTypes.enum';

@Component({
  selector: 'dumb-components-test-generic-table',
  template: `
    <!--    FLEX CONTAINERS AND STYLING    -->
    <div class='mt-md flex flex-col w-[62]'>
      <div class='-my-md -mx-md sm:-mx-sm lg:-mx-lg'>
        <div class='inline-block min-w-full py-sm align-middle'>
          <div class='shadow-sm ring-1 ring-black ring-opacity-5'>
            <!--            TABLE                  -->
            <table
              class='min-w-full border-separate' style='border-spacing: 0'
              cdk-table [dataSource]='dataSource'>
              <!-- Header and Row Declarations -->
              <tr
                class='bg-secondary-light'
                cdk-header-row *cdkHeaderRowDef='displayedColumns'></tr>
              <tr cdk-row *cdkRowDef='let row; columns: displayedColumns'></tr>
              <!--              COLUMN HEADER AND CELL DEFINITIONS    -->
              <ng-container *ngFor='let column of columnObjects;let i = index' cdkColumnDef='{{column.columnDef}}'>
                <div [ngSwitch]='column.type'>
                  <div *ngSwitchCase='valueTypes.NUMBER'>
                    <th scope='col'
                        class='sticky top-0 z-10 border-b border-primary-dark bg-secondary-light bg-opacity-75 py-sm pl-sm pr-sm text-left text-sm font-semibold text-black backdrop-blur backdrop-filter sm:pl-sm lg:pl-lg'
                        cdk-header-cell *cdkHeaderCellDef>{{column.header}}</th>
                    <td
                      class='whitespace-nowrap border-b border-primary-light py-sm pl-sm pr-sm text-md font-bold text-black sm:pl-sm lg:pl-lg'
                      cdk-cell *cdkCellDef='let row'>{{column.cell(row)}}</td>
                  </div>
                  <div *ngSwitchCase='valueTypes.LONG_TEXT'>
                    <th scope='col'
                        class='sticky top-0 z-10 border-b border-primary-dark bg-secondary-light bg-opacity-75 py-sm pl-sm pr-sm text-left text-sm font-semibold text-black backdrop-blur backdrop-filter sm:pl-sm lg:pl-lg'
                        cdk-header-cell *cdkHeaderCellDef>{{column.header}}</th>
                    <td
                      class='whitespace-nowrap border-b border-primary-light py-sm pl-sm pr-sm text-md font-medium text-gray sm:pl-sm lg:pl-lg'
                      cdk-cell *cdkCellDef='let row'>{{column.cell(row)}}</td>
                  </div>
                  <div *ngSwitchDefault>
                    <th scope='col'
                        class='sticky top-0 z-10 border-b border-primary-dark bg-secondary-light bg-opacity-75 py-sm pl-sm pr-sm text-left text-sm font-semibold text-black backdrop-blur backdrop-filter sm:pl-sm lg:pl-lg'
                        cdk-header-cell *cdkHeaderCellDef>{{column.header}}</th>
                    <td
                      class='whitespace-nowrap border-b border-primary-light py-sm pl-sm pr-sm text-sm font-medium text-black sm:pl-sm lg:pl-lg'
                      cdk-cell *cdkCellDef='let row'>{{column.cell(row)}}</td>
                  </div>
                </div>
              </ng-container>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GenericTableComponent implements OnInit {
  @Input() dataSource!: any[];
  @Input() columnObjects!: ITDSColumnObject[];
  @Input() displayedColumns: string[] = [];

  valueTypes = ETDSValueTypes;

  ngOnInit(): void {
    this.displayedColumns = this.columnObjects.map(c => c.columnDef);
  }

}
