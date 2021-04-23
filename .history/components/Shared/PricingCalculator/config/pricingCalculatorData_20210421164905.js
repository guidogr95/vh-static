// Assets
import Cores from 'public/assets/media/icons/cpu.svg'
import RAM from 'public/assets/media/icons/ram.svg'
import Storage from 'public/assets/media/icons/server.svg'
import gpu from 'public/assets/media/icons/gpu.svg'
import disk from 'public/assets/media/icons/hard-drive.svg'

export const publicPricing = {
  baseMultiplierPricingItems: {
    StandardV3: {
      label: 'Standard V3',
      pricingTable: [
        {
          label: '',
          pricingData: [
            {
              baseMultiplier: 1,
              usdHourlyRate: 0.055
            },
            {
              baseMultiplier: 2,
              usdHourlyRate: 0.110
            },
            {
              baseMultiplier: 4,
              usdHourlyRate: 0.219
            },
            {
              baseMultiplier: 8,
              usdHourlyRate: 0.438
            },
            {
              baseMultiplier: 16,
              usdHourlyRate: 0.876
            },
            {
              baseMultiplier: 24,
              usdHourlyRate: 1.752
            },
            {
              baseMultiplier: 32,
              usdHourlyRate: 3.504
            },
            {
              baseMultiplier: 48,
              usdHourlyRate: 7.008
            }
          ]
        }
      ],
      legendData: {
        features: [
          {
            icon: Cores,
            label: '2 Cores'
          },
          {
            icon: RAM,
            label: '8GB RAM'
          },
          {
            icon: Storage,
            label: '40GB Storage'
          }
        ]
      }
    },
    StandardV2: {
      label: 'Standard V2',
      pricingTable: [
        {
          label: 'Intel x86',
          pricingData: [
            {
              baseMultiplier: 1,
              usdHourlyRate: 0.045
            },
            {
              baseMultiplier: 2,
              usdHourlyRate: 0.09
            },
            {
              baseMultiplier: 4,
              usdHourlyRate: 0.18
            },
            {
              baseMultiplier: 8,
              usdHourlyRate: 0.36
            },
            {
              baseMultiplier: 16,
              usdHourlyRate: 0.72
            }
          ]
        },
        {
          label: 'Arm 64-bit',
          pricingData: [
            {
              baseMultiplier: 1,
              usdHourlyRate: 0.03825
            },
            {
              baseMultiplier: 2,
              usdHourlyRate: 0.0765
            },
            {
              baseMultiplier: 4,
              usdHourlyRate: 0.153
            },
            {
              baseMultiplier: 8,
              usdHourlyRate: 0.306
            },
            {
              baseMultiplier: 16,
              usdHourlyRate: 0.612
            }
          ]
        }
      ],
      legendData: {
        features: [
          {
            icon: Cores,
            label: '1 Cores'
          },
          {
            icon: RAM,
            label: '4GB RAM'
          }
        ]
      }
    },
    HighCPUV2: {
      label: 'High CPU V2',
      pricingTable: [
        {
          label: 'Intel x86',
          pricingData: [
            {
              baseMultiplier: 1,
              usdHourlyRate: 0.035
            },
            {
              baseMultiplier: 2,
              usdHourlyRate: 0.07
            },
            {
              baseMultiplier: 4,
              usdHourlyRate: 0.14
            },
            {
              baseMultiplier: 8,
              usdHourlyRate: 0.28
            },
            {
              baseMultiplier: 16,
              usdHourlyRate: 0.56
            },
            {
              baseMultiplier: 32,
              usdHourlyRate: 1.12
            },
            {
              baseMultiplier: 64,
              usdHourlyRate: 2.24
            }
          ]
        },
        {
          label: 'Arm 64-bit',
          pricingData: [
            {
              baseMultiplier: 1,
              usdHourlyRate: 0.02975
            },
            {
              baseMultiplier: 2,
              usdHourlyRate: 0.0595
            },
            {
              baseMultiplier: 4,
              usdHourlyRate: 0.119
            },
            {
              baseMultiplier: 8,
              usdHourlyRate: 0.238
            },
            {
              baseMultiplier: 16,
              usdHourlyRate: 0.476
            },
            {
              baseMultiplier: 32,
              usdHourlyRate: 0.952
            },
            {
              baseMultiplier: 64,
              usdHourlyRate: 1.904
            }
          ]
        }
      ],
      legendData: {
        features: [
          {
            icon: Cores,
            label: '1 Cores'
          },
          {
            icon: RAM,
            label: '1GB RAM'
          }
        ]
      }
    },
    GPU: {
      label: 'GPU',
      pricingTable: [
        {
          label: '',
          pricingData: [
            {
              baseMultiplier: 1,
              usdHourlyRate: 0.80
            },
            {
              baseMultiplier: 2,
              usdHourlyRate: 1.60
            },
            {
              baseMultiplier: 4,
              usdHourlyRate: 3.20
            },
            {
              baseMultiplier: 8,
              usdHourlyRate: 6.40
            }
          ]
        }
      ],
      legendData: {
        features: [
          {
            icon: gpu,
            label: 'K80'
          },
          {
            icon: Cores,
            label: '6 Cores'
          },
          {
            icon: RAM,
            label: '60GB RAM'
          },
          {
            icon: disk,
            label: '255GB'
          }
        ]
      }
    }
  },
  ratePricingItems: {
    DataTransfer: {
      label: 'Data Transfer',
      pricingTable: [
        {
          label: 'Public Network',
          pricingData: {
            unit: 'GB',
            usdRate: 0.10,
            min: 1
          }
        },
        {
          label: 'Private Network',
          pricingData: {
            unit: 'GB',
            usdRate: 0
          }
        }
      ]
    },
    IPAddresses: {
      label: 'IP Addresses',
      pricingTable: [
        {
          label: 'Public IP Address',
          pricingData: {
            unit: 'IP Address',
            usdRate: 2.0832
          }
        }
      ]
    }
  }
}