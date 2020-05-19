using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace foodComparisonServer.Services.Common.Helpers.v1
{
    public class Helper
    {
        private IConfiguration Configuration;
        private IHostingEnvironment HostingEnvironment;
        public Helper(IHostingEnvironment _HostingEnvironment, IConfiguration _Configuration)
        {
            HostingEnvironment = _HostingEnvironment;
            Configuration = _Configuration;
        }

        #region OBJECT CONVERSIONS

        public ArrayList ConvertDatasetToDictionary(DataSet _InputDataSet)
        {
            ArrayList Root = new ArrayList();
            List<Dictionary<string, object>> MyList;
            Dictionary<string, object> MyDictionary;

            foreach (DataTable ChildDataTable in _InputDataSet.Tables)
            {
                MyList = new List<Dictionary<string, object>>();

                foreach (DataRow Row in ChildDataTable.Rows)
                {
                    MyDictionary = new Dictionary<string, object>();
                    foreach (DataColumn Column in ChildDataTable.Columns)
                    {
                        if (string.IsNullOrEmpty(Convert.ToString(Row[Column])))
                        {
                            MyDictionary.Add(Column.ColumnName, "");
                        }
                        else
                        {
                            MyDictionary.Add(Column.ColumnName, Row[Column]);
                        }
                    }
                    MyList.Add(MyDictionary);
                }
                Root.Add(MyList);
            }
            return Root;
        }
        public List<Dictionary<string, string>> ConvertTableToDictionary(DataTable _InputDataTable)
        {
            List<Dictionary<string, string>> MyList = new List<Dictionary<string, string>>();
            for (int i = 0; i < _InputDataTable.Rows.Count; i++)
            {
                Dictionary<string, string> _row = new Dictionary<string, string>();
                for (int j = 0; j < _InputDataTable.Columns.Count; j++)
                {
                    _row.Add(_InputDataTable.Columns[j].ColumnName, _InputDataTable.Rows[i][_InputDataTable.Columns[j].ColumnName].ToString());
                }
                MyList.Add(_row);
            }
            return MyList;
        }
        #endregion

        #region CHECK DB RESPONSE

        public Boolean CheckDBResponse(DataSet _ds)
        {
            bool _Response = true;
            if (_ds == null)
            {
                _Response = false;
            }
            else
            {
                if (_ds.Tables.Count == 0)
                {
                    _Response = false;
                }
            }
            return _Response;
        }

        // Overloaded Function for Null Check DataSet
        public Boolean CheckDBNullResponse(DataTable _dt)
        {
            return (_dt == null) ? false : true;
        }
        #endregion
    }
}
